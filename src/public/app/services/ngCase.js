angular.module('app').factory('ngCase', function($http) {
	return {
		getCasesByStatus: function(developmentStatus,displayStatus) {
			return $http.get('/api/mmwrcase/getCasesByStatus/'+developmentStatus+'/'+displayStatus);
		},
		getAllAvailCases: function() {
			return $http.get('/api/mmwrcase/getAllAvailCases/');
		}


	}

});