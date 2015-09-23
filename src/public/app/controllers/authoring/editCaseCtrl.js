angular.module('app').controller('editCaseCtrl', function ($log,$scope,$http, ngCase, $stateParams, $state) {

$scope.developmentStatuses;
$scope.displayStatuses;
$scope.caseFilterOptions = [
	 {'display':'By Publication Date', 'option': 'publication_date'}
 	,{'display':'By Created Date', 'option': 'created_date'}
 	,{'display':'By Rating', 'option': 'rating'}
 	,{'display':'By Title', 'option': 'title'}	
 	,{'display':'By Tag Line', 'option': 'tag_line'}			
]

$scope.case = {
	"case_id"	: null,
	"title"	: "",
	"overview":"",
	"created_date" : null,
	"publication_date" :null,
	"case_text" : "",
	"abstract_text" : "",
	"addtional_information" :"",
	"rating"	: 0,
	"development_status"	: null,
	"display_status"	: null,
	"available_cme_credit" : null,
	"cme_release_date"	: null,
	"cme_valid_until"	: null,
	"number_cme_credits_available" : null,
	"tag_line"  : "",
	"last_edited"	: null,
	"QA": [],
	"images" : []
}

$scope.qa = {
	'pre' :[],
	'post' : []
}
$scope.images = [];

getDisplayStatus();
getDevStatus();
getCaseData();




function getCaseData() {
	ngCase.getCaseById($stateParams.caseID)
			.success(function(caseData){
				$scope.case = caseData;
				if ($scope.case.QA.length > 0) {
					// the case has some questions
					for (var i = 0; i < $scope.case.QA.length; i++) {
							var oneQA = {
								'question' 	: $scope.case.QA[i].question,
								'answers'	: $scope.case.QA[i].answers 
							}
						$scope.qa[$scope.case.QA[i].question.post_pre].push(oneQA);
						
					}
				}
			})
			.error(function(err){
				console.log('Unable to retrieve case data: '+err);
	});
}

	function getDisplayStatus() {
		ngCase.getDisplayStatus()
			.success(function(statuses) {
				$scope.displayStatuses = statuses;
			})
			.error(function(err) {
				console.log('Unable to load statuses');
			});
	}
	
	function getDevStatus() {
		ngCase.getDevStatus()
			.success(function(statuses) {
				$scope.developmentStatuses = statuses;
			})
			.error(function(err) {
				console.log('Unable to load statuses');
			});
	}


$scope.publication_date = moment().format();


$scope.publicationDateChanged = function (newDate, oldDate) {
    //console.log(newDate);
    //console.log(oldDate);
    $scope.pulication_date = newDate;
}


$scope.addQuestion = function(qa,type,e) {
    if (!qa.newQuestionText || qa.newQuestionText.length === 0) {
      return;
    }
   
    var questionText = qa.newQuestionText;
    if (questionText.length > 0) {
    	// construct a question object before pushing
    	var newQA = {
    		'question' : {
		    		'question_id': $scope.qa.length,
		    		'case_id' : $scope.case.case_id || null,
		    		'post_pre': type,
		    		'question': questionText
    		},
    		answers : []
    	}
    //  console.log(newQuestion);
      qa.push(newQA);
    }
    qa.newQuestionText ="";
    e.preventDefault();
  };

 
  $scope.removeQuestion = function(qa, question) {
    var index = qa.indexOf(question);
    if (index > -1) {
      qa.splice(index, 1)[0];
    }
  };

  

  $scope.addAnswer = function(question,e) {
    
    if (!question.newAnswerText || question.newAnswerText.length === 0) {
      return;
    }
    // contruct answer object here
    var newAnswer = {
    	'answer_id' :  question.answers.length,
    	'question_id'	: question.question.question_id,
       	'case_id': $scope.case.case_id,
    	'answer' : question.newAnswerText,
    	'correct': 0,
    	'hit_counter' : 0
    }
    question.answers.push(newAnswer);
    question.newAnswerText = '';
    e.preventDefault();
    // topic.save();
  };

  $scope.removeAnswer = function(question, answer) {
    var index = question.answers.indexOf(answer);
    if (index > -1) {
      question.answers.splice(index, 1)[0];
    }
    // topic.save();
    //}
  };

  $scope.editQuestion = function(question) {
    question.editing = true;
  };

  $scope.cancelEditingQuestion = function(question) {
   question.editing = false;
  };

  $scope.saveQuestion = function(question,e) {
    //question.save();
   question.editing = false;
    e.preventDefault();
  };

  
  $scope.saveQuestions = function() {
    for (var i = $scope.qa.length - 1; i >= 0; i--) {
      var question = $scope.qa[i];
     question.sortOrder = i + 1;
      //question.save();
    }
  };

  
  $scope.editAnswer = function(answer) {
    $log.debug("edit subquestion",answer);
    answer.editing = true;
  };

  $scope.saveAnswer = function(answer,e) {
    //question.save();
    answer.editing = false;
    e.preventDefault();
  };

$scope.options = {
    accept: function(sourceNode, destNodes, destIndex) {
      var data = sourceNode.$modelValue;
      if (data.hasOwnProperty('question')) {
         sourceType = 'question';
      } else if (data.hasOwnProperty('answer')) {
         sourceType = 'answer';
      }

     var destType = destNodes.$element.attr('data-type');
      return (sourceType == destType); // only accept the same type
    },
    dropped: function(event) {
      $log.debug(event);
      var sourceNode = event.source.nodeScope;
      var destNodes = event.dest.nodesScope;
      // update changes to server
   },
    beforeDrop: function(event) {
      // if (!window.confirm('Are you sure you want to drop it here?')) {
      //   event.source.nodeScope.$$apply = false;
      // }
    }
  };

$scope.saveCase = function(editMode) {
	if (editMode == 'edit') {
		//update case
 //   console.log('case data ', $scope.case)

    $http.post('/api/mmwrcase/updateCase',$scope.case).then(function(res){
        if (res.data.success) {
           var combinedQA = $scope.qa.pre.concat($scope.qa.post);
            for (var i=0; i < combinedQA.length; i++) {
              combinedQA[i].question.case_id = $scope.case.case_id;
              combinedQA[i].question.question_id = i;
              for (var j = 0 ; j < combinedQA[i].answers.length; j ++) {
                combinedQA[i].answers[j].case_id = $scope.case.case_id;
                combinedQA[i].answers[j].question_id = i;
                combinedQA[i].answers[j].answer_id = j;
              }
           }
            $http.post('/api/mmwrcase/createQuestionAnswer',combinedQA).then(function(res){
               if (res.data.success) {
                  alert('update success');
                }
                else {
                  alert('update failed')
                }
              });
        }
        else {
            console.log(res.data)
         //   alert('update failed with error: ', res.error)
        }

    })
	}
	else if (editMode == 'new') {
		// save case
	}
}

$scope.byQuestionType = function(type) {
	return function(question) {
		//console.log(question);
        return question.question.post_pre == type;
    }
}

$scope.setCorrectAnswer = function(question,answer) {
	for (var i=0; i < question.answers.length; i++) {
		question.answers[i].correct = 0;
	}
	answer.correct = 1;
}

});


