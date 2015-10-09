angular.module('app').controller('overviewCtrl', function($scope, ngCase, $stateParams,$state, dialogs,$window) {
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
		var dlg = dialogs.confirm();
		dlg.result.then(function(btn){
		if ($scope.preview=='p') {
			$window.close();
		}
		else {
			$state.go('home');
		}
		}, function(btn){
			//No
		});
	};
});