angular.module('app').controller('loginModalCtrl',function($scope,$http,ngIdentity,ngNotifier,ngAuth,$location,$window,$log,$modal, $modalInstance){ 
	$scope.identity = ngIdentity;

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
	
	$scope.login = function(email, password){
		ngAuth.authenticateUser(email,password).then(function(success) {  
			
			if(success) {
				// if($scope.identity.currentUser.isLevelTwo()){
				// 	$location.path('/dashboard');
				// } else if ($scope.identity.currentUser.isLevelThree()){
				// 	$location.path('/dashboard');
				// }
				// // } else if ($scope.identity.currentUser.isLevelOne()) {  //Comment out admin route for now, until we decide if we need an admin role.
				// // 	//TODO: admin route
				// // }
				// $("body").css("background-color", "#FFF;");
				console.log('Logged In!');
			} else {
				//$log.debug(success);
				ngNotifier.notifyError('Incorrect Email/Password');
			}
		});
		
	};

	


});


