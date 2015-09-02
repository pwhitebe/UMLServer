angular.module('app').controller('abstractCtrl', function($scope,$stateParams, ngCase) {
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