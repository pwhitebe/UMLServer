angular.module('app').controller('overviewCtrl', function($scope, ngCase, $stateParams,$state) {
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

	$scope.exit = function() {
		var answer = confirm('You are attempting to exit the case before completion and will lose all progress. Do you want to continue?');
		if (!answer) {
          event.preventDefault();
      	} else {
      		$state.go('home');
      	}
	};
});