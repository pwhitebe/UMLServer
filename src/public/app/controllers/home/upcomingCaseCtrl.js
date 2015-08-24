angular.module('app').controller('upcomingCaseCtrl', function($scope, $http, $modal, ngCase) {
	$scope.displayStatus = 1;
	$scope.developmentStatus = 5;
	$scope.upcomingCases;
	getUpcomingCases();

	function getUpcomingCases() {
		ngCase.getCasesByStatus($scope.developmentStatus, $scope.displayStatus)
			.success(function(cases) {
				$scope.upcomingCases = cases;
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	}


	//MODAL
	$scope.animationsEnabled = true;

	$scope.openModal = function(size) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/home/viewAllModal',
			controller: 'viewAllModalCtrl',
			size: size,
			resolve: {
				upcomingCases: function() {
					return $scope.upcomingCases;
				}
			}
		});

		modalInstance.result.then(function() {

		});
	};
	
});