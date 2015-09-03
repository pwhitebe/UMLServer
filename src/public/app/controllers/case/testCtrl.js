angular.module('app').controller('testCtrl', function($scope, ngTest, ngCase, $stateParams) {
	$scope.case;
	$scope.input = {};
	console.log($stateParams);

	ngTest.getQuestions($stateParams.caseID, $stateParams.testType).then(function(data) {
		$scope.questions = data;
		console.log($scope.questions);
	});
	
	ngCase.getCaseById($stateParams.caseID).success(function(caseData){
		$scope.case = caseData;
		//console.log($scope.case);
	}).error(function(err){
		console.log('Unable to retrieve case data: '+err);
	});
	

	$scope.checkAnswer = function() {
		console.log($scope.questions[0]);
		console.log($scope.input.selectedAnswer);
	};
});