angular.module('app').controller('preTestCtrl', function($scope, ngCase, $stateParams) {
	$scope.case;

	(function(){
		ngCase.getCaseById($stateParams.caseID)
			.success(function(caseData){
				$scope.case = caseData;
				console.log($scope.case);
			})
			.error(function(err){
				console.log('Unable to retrieve case data: '+err);
			});
		function getCase() {}
	})();


});