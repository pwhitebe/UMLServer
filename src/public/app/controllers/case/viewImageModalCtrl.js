angular.module('app').controller('viewImageModalCtrl', function ($scope, $modal, $modalInstance, image) {
	$scope.image = image;
	
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
});