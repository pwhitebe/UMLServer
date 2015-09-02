angular.module('app').controller('createCaseModalCtrl', function ($scope, $modal, $modalInstance) {


	
	
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
});