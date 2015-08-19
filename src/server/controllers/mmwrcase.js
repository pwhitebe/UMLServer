var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mmwrcasewebapp',
  password : 'mmwrquizcase',
  database : 'mmwr_case',
  port     : '/tmp/mysql.sock' 
});



exports.getCases = function(req,res) {
	//connection.connect();
	var devStatus = req.params.devStatus;
	var displayStatus = req.params.displayStatus; 
	var sqlStm = 'SELECT * FROM case_main where development_status = '+ devStatus + '  and display_status = ' + displayStatus;
	console.log(sqlStm)
	if(true){
		connection.query(sqlStm,function(err,rows){
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


exports.getCurrentCase = function(req,res) {
	//connection.connect();
	var caseData = {}
	if(true){
		connection.query('SELECT * FROM case_main where development_status = 5 and display_status = 0 ',function(err,rows){
  		if(err) {
  			res.send(err);
  		} 
  		else {
  				caseData = rows[0];
  				sqlStm = 'SELECT * FROM image where case_id = '+ caseData.case_id;
  			   	connection.query(sqlStm,function(err,images){
	  			   	if(err) {
	  					res.send(err);
	  				} 
	  				else {
	  					caseData['images'] = images;
	  					res.send(caseData);
	  				}
  		 		});

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
		connection.query('SELECT case_id, case_overview FROM case_main where development_status = 5 and display_status = 1',function(err,rows){
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
		connection.query('SELECT * FROM case_main where development_status = 5 and display_status = 2',function(err,rows){
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
	var caseId = req.caseId;
	sqlStm = 'SELECT * FROM question where case_id = '+ caseId + ' order by sequence_id';
	if(true){
		connection.query(sqlStm,function(err,rows){
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

