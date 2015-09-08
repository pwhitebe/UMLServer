angular.module('app').controller('resultsCtrl', function($scope, ngTest, ngCase, $stateParams) {
	//ngTest.getQuestions($stateParams.caseID).then(function(data) {
	ngTest.getQuestions($stateParams.caseID, 'pre').then(function(data) {
		$scope.questions = data;
	  //console.log($scope.questions);
	});
	$scope.answerStats={};
	$scope.selectedAnswer = $stateParams.selectedAnswerID;
	ngCase.getCaseById($stateParams.caseID).success(function(caseData){
		$scope.case = caseData;
		//console.log($scope.case);
		ngCase.getAnswerStats($stateParams.caseID,$stateParams.questionID).success(function(statData) {
			$scope.answerStats = statData;
		});
	}).error(function(err){
		console.log('Unable to retrieve case data: '+err);
	});



});