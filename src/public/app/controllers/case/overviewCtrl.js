angular.module('app').controller('overviewCtrl', function($scope, ngCase, $stateParams,$state, dialogs) {
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
		var dlg = dialogs.confirm();
		dlg.result.then(function(btn){
			$state.go('home');
		}, function(btn){
			//No
		});
	};
});