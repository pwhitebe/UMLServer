angular.module('app').controller('loginModalCtrl',function($scope,$http,ngIdentity,ngNotifier,ngAuth,$location,$window,$log,$modal, $modalInstance){ 
	$scope.identity = ngIdentity;

	$scope.cancel =  function() {
		$modalInstance.dismiss('cancel');
	}
	
	$scope.login = function(email, password){
		ngAuth.authenticateUser(email,password).then(function(success) {  
			
			if(success) {
				console.log($scope.identity.currentUser);
				console.log('Logged In!');
				$modalInstance.close();
			} else {
				//$log.debug(success);
				ngNotifier.notifyError('Incorrect Email/Password');
			}
		});
		
	};

	


});


