var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var CardSchema = require('./card.js');

exports.Station = mongoose.model('Station', new mongoose.Schema({
	name : String,
	cards: [CardSchema]
}));

exports.getStations = function(req, res) {
	exports.Station.find({}, function(err, objs) {
		res.json(objs);
	});
};

exports.getStation = function(req, res) {
	var id = req.params.id;
	exports.Station.findById(id, function(err, obj) {
		res.json(obj);
	});
}; 