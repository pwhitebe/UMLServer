var mysql      = require('mysql');
var properties = require('../lib/envProperties');
var connection = mysql.createConnection({
  host     : properties.mysqlhost,
  user     : properties.mysqluser,
  password : properties.mysqlpassword,
  database : properties.mysqldatabase,
  //port     : '/tmp/mysql.sock',
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
		  					try {	//console.log('resultset ', resultSets);
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
		connection.query('SELECT * FROM answers where case_id = ? and question_id = ? '[caseId,questionId],function(err,rows){
  		if(err) {
  			res.send(err);
  		} 
  		else {
  		 	   res.send(rows);
		 	}
		});
//	connection.end();

}


exports.getCaseById = function(req,res) {
	var caseId = req.params.caseId;
	var caseData = {}
		connection.query('select * from case_main where case_id = ?; SELECT * FROM image where case_id = ?; select * from question where case_id = ?; select * from answer where case_id = ? ',[caseId,caseId,caseId,caseId],function(err,resultSets){
		if(err) {
  			res.send(err);
  		} 
  		else { 
  				//console.log(resultSets);
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

exports.updateHitCounter = function(req,res) {
	var caseId = req.params.caseId;
	var questionId = req.params.questionId;
	var answerId = req.params.answerId;
	connection.query('update answer set hit_counter = hit_counter+1 where case_id = ? and question_id=? and answer_id = ?',[caseId,questionId,answerId],function(err,result) {
		if (err) {
			res.send(err);
		}
		else {
			res.send('update success');
		}
	})

}

exports.createCase = function(req,res) {
	var caseData = req.body;
	// test data
//	caseData = 
// 	{   
//     "title": "Hepatitis C", 
//     "overview": "A 28yo Asian woman presents to arrange ongoing car… normal based on standard, non-invasive measures.", 
//     "publication_date": null,
//     "case_text": "A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She has had excellent prenatal care and fetal development has been normal based on standard, non-invasive measures. ",
//     "abstract_text": "The current recommendations from the Advisory Committee on Immunization Practices (ACIP) for infants born to hepatitis B-infected mothers include postexposure prophylaxis consisting of hepatitis B (HepB) vaccine and hepatitis B immune globulin administered within 12 hours of birth, followed by completion of the 3- or 4-dose HepB vaccine series (1). To identify infants who need revaccination as well as those who need follow-up medical care for hepatitis B virus (HBV) infection, ACIP currently recommends HepB post-vaccination serologic testing (PVST) at age 9–18 months (1). This report provides CDC guidance for shortening the interval for PVST to age 9–12 months to reduce the need for unnecessary revaccination and was prompted by new data from the Enhanced Perinatal Hepatitis B Prevention Program (EPHBPP).",
//     "additional_information": "",
//     "rating": null,
//     "development_status": 0,
//     "development_status_notes": "",
//     "display_status": 0,
//     "available_cme_credits": 1,
//     "cme_release_date": null,
//     "cme_valid_until": null,
//     "number_cme_credits_available": 3,
//     "tag_line": null
// }
	connection.query('insert into case_main set ?',caseData,function(err,result){
		if(err) {
  			res.send(err);
  		} 
  		else {
  			   res.send({'message':'case added','caseId': result.insertId});
 		 	}
	})


}

exports.updateCase = function(req,res) {
	var caseData = req.body;
		// test data
//	caseData = 
// 	{  "case_id": 5, 
//     "title": "Hepatitis C", 
//     "overview": "A 30yo Asian woman presents to arrange ongoing car… normal based on standard, non-invasive measures.", 
//     "publication_date": null,
//     "case_text": "A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She has had excellent prenatal care and fetal development has been normal based on standard, non-invasive measures. ",
//     "abstract_text": "The current recommendations from the Advisory Committee on Immunization Practices (ACIP) for infants born to hepatitis B-infected mothers include postexposure prophylaxis consisting of hepatitis B (HepB) vaccine and hepatitis B immune globulin administered within 12 hours of birth, followed by completion of the 3- or 4-dose HepB vaccine series (1). To identify infants who need revaccination as well as those who need follow-up medical care for hepatitis B virus (HBV) infection, ACIP currently recommends HepB post-vaccination serologic testing (PVST) at age 9–18 months (1). This report provides CDC guidance for shortening the interval for PVST to age 9–12 months to reduce the need for unnecessary revaccination and was prompted by new data from the Enhanced Perinatal Hepatitis B Prevention Program (EPHBPP).",
//     "additional_information": "",
//     "rating": null,
//     "development_status": 0,
//     "development_status_notes": "",
//     "display_status": 0,
//     "available_cme_credits": 1,
//     "cme_release_date": null,
//     "cme_valid_until": null,
//     "number_cme_credits_available": 3,
//     "tag_line": null
// }
	var case_id = caseData.case_id;
	connection.query('update case_main set ? where case_id = ?',[caseData,case_id],function(err,updateResult){
		if (err) {
			res.send(err);
		}
		else {
			res.send('Update success');
		}
	})
}

exports.deleteCase = function(req,res) {

	var caseId = req.params.caseId;
	connection.query('call delete_case(?)',[caseId], function(err, result) {
	    if (err) {
	    		res.send(err);
	    }
	    else {
	       res.send("delete success");
	     }
	});
}

exports.createQuestion = function(req,res) {
	var data = req.body;
	connection.query('insert into question set ? ',data,function(err,result){
		if(err) {
  			res.send(err);
  		} 
  		else {
  			   res.send({'message':'question added','question_id': result.insertId});
 		 	}
	})
}

exports.updateQuestion = function(req,res) {
	var data = req.body;
	var case_id = data.case_id;
	var question_id = data.question_id;

	connection.query('update question set ? where case_id = ? and question_id = ?',[case_id,question_id],function(err,updateResult){
		if (err) {
			res.send(err);
		}
		else {
			res.send('Question Update success');
		}
	})
}

exports.createAnswer = function(req,res) {
	var data = req.body;
	connection.query('insert into answer set ?',data,function(err,result){
		if(err) {
  			res.send(err);
  		} 
  		else {
  			   res.send('answer added');
 		 	}
	})
}

exports.updateAnswer = function(req,res) {
	var data = req.body;
	var case_id = data.case_id;
	var question_id = data.question_id;
	var answer_id = data.answer_id;

	connection.query('update answer set ? where case_id = ? and question_id = ? and answer_id = ?',[case_id,question_id,answer_id],function(err,updateResult){
		if (err) {
			res.send(err);
		}
		else {
			res.send('Answer Update success');
		}
	})
}

exports.createQuestionAnswer = function(req,res) {


	var data = req.body;
// test data
// 	{   
//     "question": {"question_id":1,"case_id":5,"sequence_id":1,"post_pre":"pre","question":"this is question 1"} ,
//     "answers": [
//                 {"answer_id":1,"question_id":1,"case_id":5,"answer":"answer 1","correct":0,"hit_counter":0}
//                 ,{  "answer_id":2,"question_id":1,"case_id":5,"answer":"answer 2","correct":0,"hit_counter":0}
//                 ,{  "answer_id":3,"question_id":1,"case_id":5,"answer":"answer 3","correct":1,"hit_counter":0}
//                 ,{  "answer_id":4,"question_id":1,"case_id":5,"answer":"answer 4","correct":0,"hit_counter":0}
//     ]
// }
	// var case_id = data.case_id;
	 var question = data.question;
	 var answers =  data.answers;
	 connection.beginTransaction(function(err) {
	  if (err) { throw err; }
	   		connection.query('insert into question set ? ON DUPLICATE KEY UPDATE question_id = question_id + 1',question,function(err,questionResult){
		   		if (err) {
		   			  	return connection.rollback(function() {
	        			throw err;
	      				});
		   				res.send({'error location':'question','error msg':err});
		   		}
		   		else {
		   				var colNames = Object.keys(answers[0]);
						var newValueSet = [];
						var newValues =[];
						for(var i = 0; i < answers.length; i++){
							for (j=0; j < colNames.length; j++) {
								newValues.push(answers[i][colNames[j]]);
							}
							newValueSet.push('("' + newValues.join('","') + '")');
							newValues=[];
						}
						connection.query('INSERT INTO answer (' + colNames.join(',') + ') VALUES ' + newValueSet.join(',') , function(err, rows, fields) {
  
			   				if (err) {
			   					 return connection.rollback(function() {
						          throw err;
						        });
			   				}
			   				else {
									connection.commit(function(err) {
							        if (err) {
							          return connection.rollback(function() {
							            throw err;
							          });
							        }
							        res.send('insert success!');
							      });
							}		
			   			})
		   		}
  		   	})
	   	})
}

exports.checkQuestionExist = function(req,res) {
	var case_id = req.params.caseId;
	var question_id = req.params.questionId;

	connection.query('SELECT 1 FROM question WHERE case_id =  ? AND question_id = ?',[case_id,question_id],function(err,result){
			if (err) {
				res.send(err);
			}
			else {
				if (result.length > 0) {
					res.send(true);
				}
				else {
					res.send(false);
				}
			}
	})
}

exports.checkAnswerExist = function(req,res) {
		var case_id = req.params.caseId;
	var question_id = req.params.questionId;
	var answer_id = req.params.answerId;

	connection.query('SELECT 1 FROM answer WHERE case_id =  ? AND question_id = ? and answer_id = ?',[case_id,question_id,answer_id],function(err,result){
			if (err) {
				res.send(err);
			}
			else {
				if (result.length > 0) {
					res.send(true);
				}
				else {
					res.send(false);
				}
			}
	})

}
exports.checkCaseExist = function(req,res) {
		var case_id = req.params.caseId;

	connection.query('SELECT 1 FROM case_main WHERE case_id =  ?',[case_id],function(err,result){
			if (err) {
				res.send(err);
			}
			else {
				if (result.length > 0) {
					res.send(true);
				}
				else {
					res.send(false);
				}
			}
	})
}

exports.getRating = function(req,res) {
  	var case_id = req.params.caseId;
  	connection.query('select case_id, ROUND(((rating_1 + rating_2+ rating_3 + rating_4 + rating_5) / 5),0)  as rated from rating where case_ID = ?',[case_id],function(err,result){
  		if (err) {
				res.send(err);
		}
		else {
			 	res.send(result);
		}
  	});
}

exports.updateRating = function(req,res) {
	var data = req.body;
	var case_id = data.caseId;
	var rating =  data.rating;
	var  rateColumn = 'rating_'+ rating;
	var sqlStr = 'update rating set '+ rateColumn + ' = IFNULL(' + rateColumn + ',0) + 1 where case_id = ' + case_id;
	connection.query(sqlStr,function(err,result){
		if (err) {
				res.send(err);
		}
		else {	
			connection.query('select case_id, ROUND((rating_1 + (rating_2*2)+ (rating_3*3) + (rating_4*4) + (rating_5*5)) / (rating_1 + rating_2+ rating_3 + rating_4 + rating_5),0)  as rated from rating where case_ID = ?',[case_id],function(err,result){
		  		if (err) {
						res.send(err);
				}
				else {
					// update rating to case_main  
						connection.query('update case_main set rating = ? where case_id = ?',[result[0].rated,case_id],function(err,updateResult){
							if (err) {
								res.send(err);
							}
							else {

								res.send('rating added');
							}
						});
						
					}
		  	});

			 	
		}
	});
}

exports.getAnswerStatistic = function(req, res) {
	var case_id = req.params.caseId;
	var question_id = req.params.questionId;

	connection.query('select *, hit_counter / (select sum(hit_counter) from answer where case_id = ? and question_id = ?)*100  as distribution from answer where case_ID = ? AND question_id = ? ',[case_id,question_id,case_id,question_id], function(err,result){
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	})

}

exports.getDevStatus = function(req,res) {

	connection.query('select * from development_status', function(err,result){
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	})
}

exports.getDisplayStatus = function(req,res) {

	connection.query('select * from Display_Status', function(err,result){
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	})
}
