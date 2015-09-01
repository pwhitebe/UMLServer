angular.module('app').controller('currentCaseCtrl', function($scope, ngCase) {
	//ratings
	$scope.max = 5;
	$scope.isReadOnly = true;
	

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};

	(function() {
		ngCase.getCurrentCase()
			.success(function(currentCase){
				$scope.currentCase = currentCase;
				//console.log($scope.currentCase);
			})
			.error(function(err) {
				console.log('Case data unvailable');
			});
		function getCurrentCase() {}
	})();



});