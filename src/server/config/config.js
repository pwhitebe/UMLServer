var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var properties = require('../lib/envProperties');

module.exports = {
	//db: properties.MONGO_DOMAIN,
    rootPath: rootPath
};

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mmwrcasewebapp',
  password : 'mmwrquizcase',
  database : 'mmwrcase',
  port     : '/tmp/mysql.sock' 
});
connection.connect();
if(true){
	console.log("DB connection established");
}
else
{
	console.log("DB connection failed");
}