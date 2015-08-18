var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mmwrcasewebapp',
  password : 'mmwrquizcase',
  database : 'mmwr_case',
  port     : '/tmp/mysql.sock' 
});

exports.getCurrentCase = function(req,res) {
	connection.connect();
	if(true){
		connection.query('SELECT * FROM case_main',function(err,rows){
  		if(err) {
  			res.send(err);
  		} 
  		else {
  		 	   res.send(rows);
		 	}
		});
	}
	else
	{
		console.log("DB connection failed");
	}
	connection.end();

}