//setup Dependencies
var config = require('./config.js');
var express = require('express');
var RedisStore = require('connect-redis')(express);
var sessionStore = new RedisStore(config.redis);
var mongoose = require('mongoose');
var fs = require('fs');

//var officer = require('./lib/officer.js');

var models = require('./lib/models/models.js');

var staticdir = '/static';
// common content
var webdir = '/web';
var gamedir = '/game';

// Connect to data
mongoose.connect(config.mongodb);

// Setup server
var app = express.createServer();
app.listen(config.port);
var io = require('./lib/chat.js')(app);
var assetMiddleware = require('./lib/asset.js');
app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view options', {
		layout : false
	});
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.staticCache());
	app.use(assetMiddleware);
	app.use(express.session({
		'store' : sessionStore,
		secret : config.sessionSecret
	}));
	app.use(staticdir, express.static(__dirname + staticdir));
	app.use(webdir, express.static(__dirname + webdir));
	app.use(gamedir, express.static(__dirname + gamedir));
	app.use(app.router);
});

// Make assets available to index.ejs
app.dynamicHelpers({
	'assetsCache' : function(req, res) {
		return assetMiddleware.cacheHashes;
	},
	'isProduction' : function(req, res) {
		return 'production' === config.environment;
	}
});

app.get('/', function(req, res) {
	var index = webdir;
	console.log('index: ', index, config.environment);
	res.render(__dirname + index + '/index.ejs');
});

app.get('/game/:simulator?', function(req, res) {
	var layout = (__dirname + '/game/layouts/' + req.params.simulator + '.ejs');

	console.log('index: ', layout, config.environment);
	fs.exists(layout, function(tf) {
		if (tf) {
			res.render(layout);
		} else {
			res.render(__dirname + '/game/layouts/standard.ejs');
		}
	});
});



//// API routes return JSON ////
//// @todo I really need to get this broken into its own module
// Officers
app.get('/api/officers', models.Officer.getOfficers);
app.get('/api/officers/:id', models.Officer.getOfficer);
app.get('/api/officers/login/:id', models.Officer.login);

// Verify Mission Code
app.get('/api/mission/verify/:code?', models.Mission.verify); 

//A Route for Creating a 500 Error (Useful to keep around)
app.get('/500', function(req, res) {
	throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('/*', function(req, res) {
	throw new NotFound();
});

//setup the errors
app.error(function(err, req, res, next) {
	if ( err instanceof NotFound) {
		res.render('404.jade', {
			locals : {
				title : '404 - Not Found',
				description : '',
				author : '',
				analyticssiteid : 'XXXXXXX'
			},
			status : 404
		});
	} else {
		res.render('500.jade', {
			locals : {
				title : 'The Server Encountered an Error',
				description : '',
				author : '',
				analyticssiteid : 'XXXXXXX',
				error : err
			},
			status : 500
		});
	}
});

function NotFound(msg) {
	this.name = 'NotFound';
	Error.call(this, msg);
	Error.captureStackTrace(this, arguments.callee);
}
console.log('Listening on http://0.0.0.0:' + config.port);
