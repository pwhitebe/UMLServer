angular.module('app').controller('abstractCtrl', function($scope,$stateParams, ngCase, $modal) {
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

	//MODAL
	$scope.animationsEnabled = true;

	$scope.openModal = function(size,image) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/case/viewImageModal',
			controller: 'viewImageModalCtrl',
			size: size,
			resolve: {
				image: function() {
					return image;
				}
			}
		});

		modalInstance.result.then(function() {

		});
	};

	$scope.exit = function() {
	var answer = confirm('You are attempting to exit the case before completion and will lose all progress. Do you want to continue?');
	if (!answer) {
      event.preventDefault();
  	} else {
  		$state.go('home');
    }
	};

});