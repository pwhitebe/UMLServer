var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mmwrcasewebapp',
  password : 'mmwrquizcase',
  database : 'mmwr_case',
  port     : '/tmp/mysql.sock' 
});

exports.getCurrentCase = function(req,res) {
	//connection.connect();
	if(true){
		connection.query('SELECT * FROM case_main where development_status = "5" and display_status = "0" ',function(err,rows){
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
//	connection.end();

}

exports.getUpComingCases = function(req,res) {
	//connection.connect();
	if(true){
		connection.query('SELECT * FROM case_main where development_status = "5" and display_status = "1"',function(err,rows){
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
//	connection.end();

}

exports.getPreviousCases = function(req,res) {
//	connection.connect();
	if(true){
		connection.query('SELECT * FROM case_main where ',function(err,rows){
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
//	connection.end();

}

exports.getQuestions = function(req,res) {
//	connection.connect();
	if(true){
		connection.query('SELECT * FROM case_main where ',function(err,rows){
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
//	connection.end();

}
exports.getAnswers = function(req,req) {
//	connection.connect();
	if(true){
		connection.query('SELECT * FROM case_main where ',function(err,rows){
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
//	connection.end();

}

