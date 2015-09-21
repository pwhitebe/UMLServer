angular.module('app').controller('rootCtrl', function($scope, $http, ngCase, $state, $modal) {
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

	$scope.animationsEnabled = true;

	$scope.openLogin = function(size) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/loginModal',
			controller: 'loginModalCtrl',
			size: size
		});

		modalInstance.result.then(function() {

		});
	};

});