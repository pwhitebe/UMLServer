angular.module('app').factory('ngTest', function($http, $q) {
	return{
		getQuestions: function(caseId,testType) {
			var dfd = $q.defer();
			$http.get('/api/mmwrcase/getCaseById/'+caseId).then(function(caseData){
				//console.log(caseData);
				var questions = caseData.data.QA;
				for(var i = 0; i < questions.length; i++){
					if(questions[i].question.post_pre == testType) {
						dfd.resolve(questions[i]);
					}
				}
				//console.log(questions);
				//dfd.resolve(questions);
			});
			return dfd.promise;
		}
	}

});