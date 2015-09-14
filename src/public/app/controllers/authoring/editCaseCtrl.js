angular.module('app').controller('editCaseCtrl', function ($scope,$http, ngCase, $stateParams, $state) {

$scope.developmentStatuses;
$scope.displayStatuses;
$scope.caseFilterOptions = [
	 {'display':'By Publication Date', 'option': 'publication_date'}
 	,{'display':'By Created Date', 'option': 'created_date'}
 	,{'display':'By Rating', 'option': 'rating'}
 	,{'display':'By Title', 'option': 'title'}	
 	,{'display':'By Tag Line', 'option': 'tag_line'}			
]


getDisplayStatus();
getDevStatus();
getCaseData();


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


function getCaseData() {
	ngCase.getCaseById($stateParams.caseID)
			.success(function(caseData){
				$scope.case = caseData;
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

});


