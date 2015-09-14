angular.module('app').controller('dashboardCtrl', function($scope, ngCase,$modal) {
	

	$scope.developmentStatus;
	$scope.displayStatus;
	$scope.tabCategory=[
                    {active:true}
                   ];
	$scope.draftCases;
	$scope.currentCases;
	$scope.upcomingCases;
	$scope.previousCases;
	$scope.selectedFilter = 'publication_date';
	$scope.caseFilters = [
	 {'display':'By Publication Date', 'option': 'publication_date'}
 	,{'display':'By Created Date', 'option': 'created_date'}
 	,{'display':'By Last Edited Date', 'option': 'last_edited'}					
 	,{'display':'By Rating', 'option': 'rating'}
 	,{'display':'By Title', 'option': 'title'}	
 	,{'display':'By Tag Line', 'option': 'tag_line'}

	];


	getDisplayStatus();
	getDevStatus();
	getDraftCases();
	getcurrentCases();
	getUpcomingCases();
	getPreviousCases();


	function getDisplayStatus() {
		ngCase.getDisplayStatus()
			.success(function(statuses) {
				$scope.displayStatus = statuses;
				console.log($scope.displayStatus);
			})
			.error(function(err) {
				console.log('Unable to load statuses');
			});
	}
	
	function getDevStatus() {
		ngCase.getDevStatus()
			.success(function(statuses) {
				$scope.developmentStatus = statuses;
			})
			.error(function(err) {
				console.log('Unable to load statuses');
			});
	}

	function getUpcomingCases() {
		ngCase.getCasesByStatus(5,1)
			.success(function(cases) {
				$scope.upcomingCases = cases;
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	}

	function getcurrentCases() {
		ngCase.getCasesByStatus(5,0)
			.success(function(cases) {
				$scope.currentCases= cases;
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	}

	function getDraftCases() {
		ngCase.getCasesByStatus(0, 3)
			.success(function(cases) {
				$scope.draftCases = cases;
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	}

	function getPreviousCases() {
		ngCase.getCasesByStatus(5, 2)
			.success(function(cases) {
				$scope.previousCases = cases;
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	}

	//MODAL
	$scope.animationsEnabled = true;

	$scope.createCase = function(size,displayStatus,developmentStatus) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/authoring/createCaseModal',
			controller: createCaseModalInstanceCtrl,
			size: 'lg',
			keyboard : false,
			backdrop	:'static'
			// resolve :  { 
			// 	displayStatus : function() {
			// 		return displayStatus;
			// 	},
			// 	developmentStatus : function() {
			// 		return developmentStatus;
			// 	}
			// }
		});

		modalInstance.result.then(function() {

		});
	}

});

var createCaseModalInstanceCtrl = function ($scope,$modalInstance,$animate) {
 
 $scope.ok = function () {
    $animate.enabled(true);
    $modalInstance.close();
   
  };

 $scope.cancel = function () {
    $animate.enabled(true);
    $modalInstance.dismiss('cancel');
    // if (reload) {
    //   $timeout($route.reload,500);
    // }
  };
};