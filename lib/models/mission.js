var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

exports.Mission = mongoose.model('Mission', new mongoose.Schema({
	name : String,
}));

// Seed data
exports.verify = function(req, res) {
	exports.Mission.find({missionCode:req.params.code},function(err,objs){
		res.json({
			response: (objs.length > 0) ? true : false
		});
	});
}
// exports.getMissions = function(req, res) {
// exports.Mission.find({}, function(err, objs){
// res.json(objs);
// });
// };
//
// exports.getMission = function(req, res) {
// var id = req.params.id;
// exports.Mission.findById(id, function(err, obj){
// res.json(obj);
// });
// };
//
// exports.login = function(req, res) {
// res.send('Login');
// };
