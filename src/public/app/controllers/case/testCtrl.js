angular.module('app').controller('testCtrl', function($scope, ngTest, ngCase, $stateParams, $state) {
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
	//	console.log($scope.questions);
	//	console.log($scope.questions.selectedAnswer);
		// may need to update hit counter here pending clarification.  
		ngCase.updateHitCounter($stateParams.caseID,$scope.questions.question.question_id,$scope.questions.selectedAnswer);
        for(var i = 0; i < $scope.questions.answers.length; i++){
        	if ($scope.questions.answers[i].answer_id == $scope.questions.selectedAnswer){
        			// found matching answer
        	//		return $scope.questions.answers[i].correct == 1;
    	    		// or do something else here		
        		}
       	} 
		
       	$state.go('results',{caseID : $stateParams.caseID, testType: $stateParams.testType, questionID :$scope.questions.question.question_id, selectedAnswerID :  $scope.questions.selectedAnswer});
	};

	$scope.exit = function() {
		var answer = confirm('You are attempting to exit the case before completion and will lose all progress. Do you want to continue?');
		if (!answer) {
          event.preventDefault();
      	} else {
      		$state.go('home');
      	}
	};
});