angular.module('app').controller('viewAllModalCtrl', function ($scope, $modal, $modalInstance, upcomingCases) {
	$scope.upcomingCases = upcomingCases;
	
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
});