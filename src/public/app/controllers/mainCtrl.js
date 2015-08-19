angular.module('app').controller('mainCtrl', function($scope, $http) {

	$http.get('/api/mmwrcase/currentCase/').then(function(res) {
		if (res.data) {
			$scope.currentCase = res.data[0];
			console.log($scope.currentCase);
		} else {
			alert('no data received');
		}
	});

});