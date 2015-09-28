angular.module('app').controller('createCaseCtrl', function ($scope,$http, ngCase,$log,Upload,ngNotifier) {

$scope.developmentStatuses;
$scope.displayStatuses;
$scope.galleryStatus = {'open':false};

getDisplayStatus();
getDevStatus();

$scope.case = {
	"case_id"	: null,
	"title"	: "",
	"overview":"",
	"created_date" : null,
	"publication_date" :null,
	"case_text" : "",
	"abstract_text" : "",
	"additional_information" :"",
	"rating"	: 0,
	"development_status"	: 0,
	"display_status"	: 3,
	"available_cme_credits" : 0,
	"cme_release_date"	: null,
	"cme_valid_until"	: null,
	"number_cme_credits_available" : null,
	"tag_line"  : "",
	"last_edited"	: null
}


$scope.qa = {
	'pre' :[],
	'post' : []
}

$scope.images = [];

$scope.saveDraft = function() {
	 	// validate data before save 
	 	var date = new Date();  // get the current timestamp
	 	if ($scope.case.created_date == null) {
			$scope.case.created_date = date.toISOString();
		}
		$scope.case.last_edited = date.toISOString();
		if ($scope.case.case_id == null) {
			delete $scope.case.case_id;
			$http.post('/api/mmwrcase/createCase',$scope.case).then(function(res){
				if (res.data.hasOwnProperty('message')) { // create was success
					 $scope.case.case_id = res.data.caseId;  // retreive newly inserted case id
					 // using the new id for the QAs
					 var combinedQA = $scope.qa.pre.concat($scope.qa.post);
					 for (var i=0; i < combinedQA.length; i++) {
					 	combinedQA[i].question.case_id = $scope.case.case_id;
					 	combinedQA[i].question.question_id = i;
					 	combinedQA[i].question.sequence_id = i;
					 	for (var j = 0 ; j < combinedQA[i].answers.length; j ++) {
					 		combinedQA[i].answers[j].case_id = $scope.case.case_id;
					 		combinedQA[i].answers[j].question_id = i;
					 		combinedQA[i].answers[j].answer_id = j;
					 	}
					 }
					 // saving QA to database
					 	$http.post('/api/mmwrcase/createQuestionAnswer',combinedQA).then(function(res){
			               if (res.data.success) {
			                  alert('save success');
			                }
			                else {
			                  alert('save failed')
			                }
			              });
				}
			});
		}
		else {  // case already exist, update case

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

$scope.uploadFile = function(files,imageTitle,imageCaption) {
  if(files) {
    // for(var i = 0; i < files.length; i++) {
      var file = files;
      console.log('file data ', file);
      //console.log('FILES********',file);
      Upload.upload({
        url:'/api/fileUpload',
        file: file,
        fields: {
          'image_id': 0,
          'case_id': 0,
          'sequence_id' : 0,
          'image_url':'',
          'featured'	: 0,
          'title'	: imageTitle,
          'caption'	: imageCaption
        }
      }).progress(function(evt) {
        var progressPercentage = parseInt(100.0*evt.loaded / evt.total);
        //console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
      }).success(function(data, status, header, config) {
        //file is uploaded successfully, attach to $scope.images
        console.log('image data ',data);
        $scope.images.unshift(data);
        $scope.galleryStatus.open = true;
        ngNotifier.notify('Image uploaded successfully.');
        //console.log('file uploaded successfully. Response: ', data);
      }).error(function(data, status, header, config){
        console.log('error in uploading file' + file.$error);
      });
      $('#uploadThumb').attr('src','');
    }
  // }
};

  $scope.deleteFile = function(image, index) {
    var deleteConfirm = $window.confirm('Are you sure you want to delete this image?');
    //console.log(image);\
    if (deleteConfirm) {
      $http.post('/api/fileUpload/delete/', image).then(function(res) {
        if (res.data.success) {
          $scope.images.splice(index, 1);
          ngNotifier.notify('Image successfully deleted.')
        } else {
          console.log('Deletion Failed');
          ngNotifier.notifyError('Error. Image unabled to be deleted.')
        }
      });
    }


  };

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

 $scope.setCorrectAnswer = function(question,answer) {
	for (var i=0; i < question.answers.length; i++) {
		question.answers[i].correct = 0;
	}
	answer.correct = 1;
}

});


