angular.module('app').controller('previousCaseCtrl', function($scope, $http, ngCase) {
	$scope.displayStatus = 2;
	$scope.developmentStatus = 5;
	$scope.previousCases;
	getPreviousCases();

	function getPreviousCases() {
		ngCase.getCasesByStatus($scope.developmentStatus, $scope.displayStatus)
			.success(function(cases) {
				$scope.previousCases = cases;
				console.log($scope.previousCases);
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	}

});