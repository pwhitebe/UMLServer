var db = require('../lib/dbConnection');

exports.getUsers = function(req, res) {
	db.query('select * from user', function(err, collection) {
		res.send(collection);
	});
};