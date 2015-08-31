angular.module('app').controller('previousCaseCtrl', function($scope, $http, ngCase) {
	$scope.displayStatus = 2;
	$scope.developmentStatus = 5;
	$scope.previousCases;

	$scope.max = 5;
	$scope.isReadOnly = true;


	(function() {
		ngCase.getCasesByStatus($scope.developmentStatus, $scope.displayStatus)
			.success(function(cases) {
				$scope.previousCases = cases;
				//console.log($scope.previousCases);
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
		function getPreviousCases() {}
	})();

});