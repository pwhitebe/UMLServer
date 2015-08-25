angular.module('app').controller('overviewCtrl', function($scope, ngCase, $stateParams) {
	$scope.case;

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