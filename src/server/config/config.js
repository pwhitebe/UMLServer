var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var properties = require('../lib/envProperties');

module.exports = {
	//db: properties.MONGO_DOMAIN,
    rootPath: rootPath
};

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : properties.mysqlhost,
  user     : properties.mysqluser,
  password : properties.mysqlpassword,
  database : properties.mysqldatabase,
  port     : properties.port
});
connection.connect( function(err) {
	if(err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected to mysql db as id ' + connection.threadId);
});
