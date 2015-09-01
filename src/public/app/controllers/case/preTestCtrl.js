angular.module('app').controller('preTestCtrl', function($scope, ngTest, ngCase, $stateParams) {
	$scope.case;
	$scope.radioAnswer;
	console.log($stateParams.caseID);

	ngTest.getQuestions($stateParams.caseID).then(function(data) {
		$scope.questions = data;
		console.log($scope.questions);
	});
	
	ngCase.getCaseById($stateParams.caseID).success(function(caseData){
		$scope.case = caseData;
		console.log($scope.case);
	}).error(function(err){
		console.log('Unable to retrieve case data: '+err);
	});
	

	$scope.submitAnswer = function(selectedAnswer) {

	};
});