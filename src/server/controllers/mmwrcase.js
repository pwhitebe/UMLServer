var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mmwrcasewebapp',
  password : 'mmwrquizcase',
  database : 'mmwr_case',
  port     : '/tmp/mysql.sock',
  multipleStatements : true
});



exports.getCasesByStatus = function(req,res) {
	//connection.connect();
	var devStatus = req.params.devStatus;
	var displayStatus = req.params.displayStatus; 
	//var sqlStm = 'SELECT * FROM case_main where development_status = ? and display_status = ?',[devStatus,displayStatus];
	//console.log(sqlStm)
	if(true){
		connection.query('SELECT * FROM case_main where development_status = ? and display_status = ?',[devStatus,displayStatus],function(err,rows){
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
  				try {
	  				caseData = rows[0];
	  				var caseId = caseData.case_id;
	  			//	sqlStm = 'SELECT * FROM image where case_id = ?'+ caseData.case_id;
	  			   	connection.query('SELECT * FROM image where case_id = ?; select * from question where case_id = ?; select * from answer where case_id = ? ',[caseId,caseId,caseId],function(err,resultSets){
		  			   	if(err) {
		  					res.send(err);
		  				} 
		  				else {
		  					try {	console.log('resultset ', resultSets);
					  				caseData['images'] = resultSets[0,0];
					  				caseData['QA'] = [];
					  				var questions = resultSets[0,1];
					  				var answers = resultSets[0,2];
					  			//	console.log('questions ',questions);
					  				for(var i = 0; i < questions.length; i ++){
					  				//	console.log(questions[i]);
					  					var oneQA = {'question': questions[i],'answers':[]};
					  					for (j=0; j < answers.length; j++){
					  						if (answers[j].question_id == questions[i].question_id) {
					  							delete answers[j].case_id;
					  							delete answers[j].question_id;
					  							oneQA.answers.push(answers[j])
					  						}
					  					}
					  					caseData['QA'].push(oneQA);
					  				}
					  				//casData['QA'] = 
					  				res.send(caseData);
	 		 					}
				 		 		catch(e) {
				 		 			res.send('case not found or problem with query');
				 		 		}
		  				}
  		 			});		
 		 		}
 		 		catch(e1){
 		 			res.send('case not found or problem with query');
 		 		}
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
	var caseId = req.params.caseId;
	//sqlStm = 'SELECT * FROM question where case_id = '+ caseId + ' order by sequence_id';
	if(true){
		connection.query( 'SELECT * FROM question where case_id = ?',[caseId],function(err,rows){
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
exports.getAnswers = function(req,res) {
//	connection.connect();
	var caseId = req.params.caseId;
	var questionId = req.params.questionId;
	if(true){
		connection.query('SELECT * FROM answers where case_id = ? and question_id = ? '[caseId,questionId],function(err,rows){
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


exports.getCaseById = function(req,res) {
	var caseId = req.params.caseId;
	var caseData = {}
		connection.query('select * from case_main where case_id = ?; SELECT * FROM image where case_id = ?; select * from question where case_id = ?; select * from answer where case_id = ? ',[caseId,caseId,caseId],function(err,resultSets){
		if(err) {
  			res.send(err);
  		} 
  		else { 
  				console.log(resultSets);
  				caseData = resultSets[0,0][0];
  				caseData['images'] = resultSets[0,1];
  				caseData['QA'] = [];
  				var questions = resultSets[0,2];
  				var answers = resultSets[0,3];
  			//	console.log('questions ',questions);
  				for(var i = 0; i < questions.length; i ++){
  				//	console.log(questions[i]);
  					var oneQA = {'question': questions[i],'answers':[]};
  					for (j=0; j < answers.length; j++){
  						if (answers[j].question_id == questions[i].question_id) {
  							delete answers[j].case_id;
  							delete answers[j].question_id;
  							oneQA.answers.push(answers[j])
  						}
  					}
  					caseData['QA'].push(oneQA);
  				}
  				//casData['QA'] = 
  				res.send(caseData);
	  	 	}
		});
}

exports.getAllAvailCases = function(req,res) {
	//connection.connect();
	var devStatus = req.params.devStatus;
	var displayStatus = req.params.displayStatus; 
	//var sqlStm = 'SELECT * FROM case_main where development_status = ? and display_status = ?',[devStatus,displayStatus];
	//console.log(sqlStm)
	if(true){
		connection.query('SELECT * FROM case_main where development_status = ? and display_status <> ?',[5,3],function(err,rows){
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

