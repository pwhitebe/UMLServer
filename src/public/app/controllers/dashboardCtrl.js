angular.module('app').controller('dashboardCtrl', function($scope, ngCase) {
	

	$scope.developmentStatus;
	$scope.displayStatus;
	$scope.tabCategory=[
                    {active:true}
                   ];
	$scope.draftCases;
	$scope.currentCases;
	$scope.upcomingCases;
	$scope.previousCases;
	


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

});