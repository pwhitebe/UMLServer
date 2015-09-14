angular.module('app').controller('rootCtrl', function($scope, $http, ngCase, $state) {
	getAvailableCases();

	function getAvailableCases() {
		ngCase.getAllAvailCases()
			.success(function(cases){
				$scope.searchableCases = cases;
			})
			.error(function(err) {
				console.log('Case data unvailable');
			});
	}

	$scope.selected = function($item){
		$state.go('overview',{caseID:$item.case_id});
	};

});