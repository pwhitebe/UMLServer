angular.module('app').factory('ngTest', function($http, $q) {
	return{
		getQuestions: function(caseId) {
			var dfd = $q.defer();
			$http.get('/api/mmwrcase/getCaseById/'+caseId).then(function(caseData){
				//console.log(caseData);
				var questions = caseData.data.QA;
				//console.log(questions);
				dfd.resolve(questions);
			});
			return dfd.promise;
		}
	}

});