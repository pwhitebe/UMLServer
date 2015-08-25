angular.module('app').factory('ngCase', function($http) {
	return {
		getCasesByStatus: function(developmentStatus,displayStatus) {
			return $http.get('/api/mmwrcase/getCasesByStatus/'+developmentStatus+'/'+displayStatus);
		},
		getAllAvailCases: function() {
			return $http.get('/api/mmwrcase/getAllAvailCases/');
		},
		getCurrentCase: function() {
			return $http.get('/api/mmwrcase/currentCase/');
		},
		getCaseById: function(caseId) {
			return $http.get('/api/mmwrcase/getCaseById/'+caseId);
		}


	}

});