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

$scope.qa = [];

$scope.images = [];

getDisplayStatus();
getDevStatus();
getCaseData();




function getCaseData() {
	ngCase.getCaseById($stateParams.caseID)
			.success(function(caseData){
				$scope.case = caseData;
				console.log($scope.case);
				if ($scope.case.QA.length > 0) {
					// the case has some questions
					for (var i = 0; i < $scope.case.QA.length; i++) {
						var oneQA = {
							'question' 	: $scope.case.QA[i].question,
							'answers'	: $scope.case.QA[i].answers 
						}
						$scope.qa.push(oneQA)
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


$scope.addTopic = function(qa,e) {
    if (!qa.newQuestion || qa.newQuestion.length === 0) {
      return;
    }
    // if ($scope.eventdoc.categories.indexOf(category).topics.length > 10) {
    //   window.alert('You can\'t add more than 10 topics!');
    //   return;
    // }
    //var topicName = document.getElementById('topicName').value;
    var questionText = qa.newQuestion;
    if (questionText.length > 0) {
      qa.questions.push({
        question: questionText,
        type: 'topic',
        answers: [],
        sortOrder: qa.questions.length
      });

    }
    qa.newQuestion ="";
    e.preventDefault();
  };

  $scope.editTopic = function(topic) {
    topic.editing = true;
  };

  $scope.cancelEditingTopic = function(topic) {
    topic.editing = false;
  };

  $scope.saveTopic = function(topic,e) {
    // topic.save();
    topic.editing = false;
    e.preventDefault();
  };

  $scope.removeTopic = function(qa, question) {
    // if (window.confirm('Are you sure to remove this topic?')) {
    //   //topic.destroy();  //TODO
    // }
    var index = qa.questions.indexOf(question);
    if (index > -1) {
      qa.questions.splice(index, 1)[0];
    }
  };

  $scope.saveTopics = function() {
    for (var i = $scope.eventdoc.categories[0].topics.length - 1; i >= 0; i--) {
      var topic = $scope.eventdoc.categories[0].topics[i];
      topic.sortOrder = i + 1;
      // topic.save();
    }
  };

  $scope.addSubTopic = function(question,e) {
    
    if (!question.newAnswer || question.newAnswer.length === 0) {
      return;
    }
    question.answers.push({
      answer: question.newAnswer,
      sortOrder: question.answers.length,
      type: 'subTopic',
    });
    question.newAnswer = '';
    e.preventDefault();
    // topic.save();
  };

  $scope.removeSubTopic = function(topic, subTopic) {
    //if (window.confirm('Are you sure to remove this subTopic?')) {
    var index = topic.subTopics.indexOf(subTopic);
    if (index > -1) {
      topic.subTopics.splice(index, 1)[0];
    }
    // topic.save();
    //}
  };

  $scope.editSubTopic = function(subTopic) {
    $log.debug("edit sub topic",subTopic);
    subTopic.editing = true;
  };

  $scope.saveSubTopic = function(subTopic,e) {
    // topic.save();
    subTopic.editing = false;
    e.preventDefault();
  };

  $scope.options = {
    accept: function(sourceNode, destNodes, destIndex) {
      var data = sourceNode.$modelValue;
      var destType = destNodes.$element.attr('data-type');
      return (data.type == destType); // only accept the same type
    },
    dropped: function(event) {
      $log.debug(event);
      var sourceNode = event.source.nodeScope;
      var destNodes = event.dest.nodesScope;
      // update changes to server
      if (destNodes.isParent(sourceNode) && destNodes.$element.attr('data-type') == 'subTopic') { // If it moves in the same topic, then only update topic
        var topic = destNodes.$nodeScope.$modelValue;
        // topic.save();
      } else { // save all
        $scope.saveTopics();
      }
    },
    beforeDrop: function(event) {
      // if (!window.confirm('Are you sure you want to drop it here?')) {
      //   event.source.nodeScope.$$apply = false;
      // }
    }
  };


// modified section

$scope.addQuestion = function(qa,e) {
    if (!qa.newQuestion || qa.newQuestion.length === 0) {
      return;
    }
   
    var questionText = qa.newQuestion;
    if ( questionText.length > 0) {
      qa.push({
        question: questionText,
        type: 'question',
        answers: [],
        sortOrder: qa.length
      });

    }
    qa.newQuestion ="";
    e.preventDefault();
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

  $scope.removeQuestion = function(qa,question) {
    // if (window.confirm('Are you sure to remove thisquestion?')) {
    //   //Question.destroy();  //TODO
    // }
    $log.debug(question);
    var index = qa.questions.indexOf(question);
    if (index > -1) {
      qa.questions.splice(index, 1)[0];
    }
  };

  $scope.saveQuestions = function() {
    for (var i = $scope.qa.questions.length - 1; i >= 0; i--) {
      var question = $scope.qa.questions[i];
     question.sortOrder = i + 1;
      //question.save();
    }
  };

  $scope.addAnswer = function(question,e) {
    if (!question.newAnswer || question.newAnswer.length === 0) {
      return;
    }
   question.answers.push({
      answer:question.newAnswer,
      sortOrder:question.answers.length,
      type: 'answer'
    });
   question.newAnswer = '';
    e.preventDefault();
    //question.save();
  };

  $scope.removeAnswer = function(question, answer) {
    //if (window.confirm('Are you sure to remove this answer?')) {
    var index =question.answers.indexOf(answer);
    if (index > -1) {
     question.answers.splice(index, 1)[0];
    }
    //question.save();
    //}
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
      var destType = destNodes.$element.attr('data-type');
      return (data.type == destType); // only accept the same type
    },
    dropped: function(event) {
      $log.debug(event);
      var sourceNode = event.source.nodeScope;
      var destNodes = event.dest.nodesScope;
      // update changes to server
      if (destNodes.isParent(sourceNode) && destNodes.$element.attr('data-type') == 'answer') { // If it moves in the samequestion, then only updatequestion
        varquestion = destNodes.$nodeScope.$modelValue;
        //question.save();
      } else { // save all
        $scope.saveQuestions();
      }
    },
    beforeDrop: function(event) {
      // if (!window.confirm('Are you sure you want to drop it here?')) {
      //   event.source.nodeScope.$$apply = false;
      // }
    }
  };

$scope.saveCase = function(editMode) {
	if (editMode == 'edit') {
		// update case
	}
	else if (editMode == 'new') {
		// save case
	}
}

});


