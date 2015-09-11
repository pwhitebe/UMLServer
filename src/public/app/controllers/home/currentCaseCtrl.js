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
				for(var i =0; i < $scope.currentCase.images.length; i++) {
					if($scope.currentCase.images[i].featured === 1) {
						$scope.featuredImageUrl = $scope.currentCase.images[i].image_url;
					}
				}
			})
			.error(function(err) {
				console.log('Case data unvailable');
			});
		function getCurrentCase() {}
	})();



});