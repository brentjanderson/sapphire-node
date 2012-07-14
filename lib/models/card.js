var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

exports.Card = mongoose.model('Card', new mongoose.Schema({
	name : String
}));

exports.getCards = function(req, res) {
	exports.Card.find({}, function(err, objs) {
		res.json(objs);
	});
};

exports.getCard = function(req, res) {
	var id = req.params.id;
	exports.Card.findById(id, function(err, obj) {
		res.json(obj);
	});
}; 