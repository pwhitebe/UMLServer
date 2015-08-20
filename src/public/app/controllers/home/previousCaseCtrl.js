angular.module('app').controller('previousCaseCtrl', function($scope, $http) {
	$scope.displayStatus = 2;
	$scope.developmentStatus = 5;

	$http.get('/api/mmwrcase/getCasesByStatus/' + $scope.developmentStatus + '/' + $scope.displayStatus).then(function(res) {
		if (res.data) {
			$scope.previousCases = res.data;
			console.log($scope.previousCases);
		} else {
			alert('no data received');
		}
	});

});