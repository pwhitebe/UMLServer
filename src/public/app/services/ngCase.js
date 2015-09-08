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
		},
		getDevStatus : function() {
			return $http.get('/api/mmwrcase/getDevStatus/');
		},
		getDisplayStatus : function() {
			return $http.get('/api/mmwrcase/getDisplayStatus/');
		},
		getAnswerStats : function(caseId,questionId) {
			return $http.get('/api/mmwrcase/getAnswerStatistic/'+caseId+'/'+questionId);
		},
		updateHitCounter : function(caseId,questionId,answerId) {
			return $http.post('/api/mmwrcase/updateHitCounter/'+caseId+'/'+questionId+'/'+answerId);
		}
	}

});