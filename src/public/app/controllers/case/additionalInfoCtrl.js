angular.module('app').controller('additionalInfoCtrl', function($scope,$stateParams, ngCase, $modal) {
	$scope.case;
	$scope.max = 5;
	$scope.isReadOnly = false;
	
	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};

	(function(){
		ngCase.getCaseById($stateParams.caseID)
			.success(function(caseData){
				$scope.case = caseData;
			})
			.error(function(err){
				console.log('Unable to retrieve case data: '+err);
			});
		function getCase() {}
	})();
});