angular.module('app').controller('rootCtrl', function($scope, $http, ngCase) {
	getAvailableCases();
	$scope.selected = '';

	function getAvailableCases() {
		ngCase.getAllAvailCases()
			.success(function(cases){
				$scope.searchableCases = cases;
			})
			.error(function(err) {
				console.log('Case data unvailable');
			});
	}

});