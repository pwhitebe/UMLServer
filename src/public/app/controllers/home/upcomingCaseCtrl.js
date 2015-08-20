angular.module('app').controller('upcomingCaseCtrl', function($scope, $http) {
	$scope.displayStatus = 1;
	$scope.developmentStatus = 5;
	$http.get('/api/mmwrcase/getCasesByStatus/'+$scope.developmentStatus+'/'+$scope.displayStatus).then(function(res) {
		if (res.data) {
			$scope.upcomingCases = res.data;
			console.log($scope.upcomingCases);
		} else {
			alert('no data received');
		}
	})
})