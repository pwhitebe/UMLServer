angular.module('app').controller('overviewCtrl', function($scope, ngCase, $stateParams,$state, dialogs) {
	$scope.case;
	$scope.preview = $stateParams.preview;
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

	$scope.exit = function() {
		ngCase.exitMode($scope.preview)
	};
});