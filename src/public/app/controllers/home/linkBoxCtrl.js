angular.module('app').controller('linkBoxCtrl', function($scope, $http, $modal) {
	$scope.animationsEnabled = true;

	$scope.openFaqModal = function(size) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/home/faqModal',
			controller: 'faqModalCtrl',
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

	$scope.openAboutModal = function(size) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/home/aboutModal',
			controller: 'aboutModalCtrl',
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

	$scope.openFeedbackModal = function(size) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/home/feedbackModal',
			controller: 'feedbackModalCtrl',
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

angular.module('app').controller('faqModalCtrl', function ($scope, $modal, $modalInstance) {
	
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
});

angular.module('app').controller('aboutModalCtrl', function ($scope, $modal, $modalInstance) {
	
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
});

angular.module('app').controller('feedbackModalCtrl', function ($scope, $modal, $modalInstance, upcomingCases) {
	
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
});