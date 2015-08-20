angular.module('app').controller('rootCtrl', function($scope, $http) {

	$scope.selected = '';
	$http.get('/api/mmwrcase/getAllAvailCases/').then(function(res) {
		if (res.data) {
			$scope.searchableCases = res.data;
			console.log($scope.searchableCases);
		} else {
			alert('no data received');
		}
	});

});