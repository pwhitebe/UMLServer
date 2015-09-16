angular.module('app').factory('ngConfirm', function($http) {
	return {
		exitCase: function() {
			
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
		}
	}
});