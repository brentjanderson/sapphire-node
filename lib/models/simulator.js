var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var StationSchema = require('./station.js');

exports.Simulator = mongoose.model('Simulator', new mongoose.Schema({
	name : String,
	registry : String,
	shortname : String,
	stations: [StationSchema]
}));

exports.getSimulators = function(req, res) {
	exports.Simulator.find({}, function(err, objs) {
		res.json(objs);
	});
};

exports.getSimulator = function(req, res) {
	var id = req.params.id;
	exports.Simulator.findById(id, function(err, obj) {
		res.json(obj);
	});
}; 