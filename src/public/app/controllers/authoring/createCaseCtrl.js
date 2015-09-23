angular.module('app').controller('createCaseCtrl', function ($scope,$http, ngCase) {

$scope.developmentStatuses;
$scope.displayStatuses;


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
	"addtional_information" :"",
	"rating"	: 0,
	"development_status"	: null,
	"display_status"	: null,
	"available_cme_credit" : null,
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
		$http.post('/api/mmwrcase/createCase',$scope.case).then(function(res){
			if (res.hasOwnProperty('message')) { // create was success
				 newCaseId = result.caseId;  // retreive newly inserted case id
				 // using the new id for the QAs
				 var combinedQA = $scope.qa.pre.concat($scope.qa.post);
				 for (var i=0; i < combinedQA.length; i++) {
				 	combinedQA[i].question.case_id = newCaseId;
				 	combinedQA[i].question.question_id = i;
				 	for (var j = 0 ; j < combinedQA[i].answers.length; j ++) {
				 		combinedQA[i].answers[j].case_id = newCaseId;
				 		combinedQA[i].answers[j].question_id = i;
				 		combinedQA[i].answers[j].answer_id = k;
				 	}
				 }
				 // saving QA to database
				 	$http.post('/api/mmwrcase/createQuestionAnswer',combinedQA).then(function(res){

				 	})
			}
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

});


