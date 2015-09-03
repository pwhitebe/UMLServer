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


