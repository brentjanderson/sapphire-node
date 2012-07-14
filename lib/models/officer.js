var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

exports.Officer = mongoose.model('Officer', new mongoose.Schema(
	{
		name:String,
		loggedIn:Boolean
	}));

// Seed data
exports.getOfficers = function(req, res) {
	exports.Officer.find({}, function(err, objs){
		res.json(objs);
	});
};

exports.getOfficer = function(req, res) {
	var id = req.params.id;
	exports.Officer.findById(id, function(err, obj){
		res.json(obj);
	});
};

exports.login = function(req, res) {
    res.send('Login');
};
