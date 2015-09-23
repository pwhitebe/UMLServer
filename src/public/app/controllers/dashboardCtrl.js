angular.module('app').controller('dashboardCtrl', function($scope, ngCase,$modal) {
	
	$scope.max = 5;
	$scope.developmentStatus;
	$scope.displayStatus;
	$scope.tabCategory=[
                    {active:true}
                   ];
	$scope.draftCases;
	$scope.currentCases;
	$scope.upcomingCases;
	$scope.previousCases;
	$scope.chartColors = [ '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', 
             '#FF9655', '#FFF263', '#6AF9C4'];
	
	$scope.caseFilters = 
	[
	 {'display':'By Publication Date - Latest First', 'option': '-publication_date'}
	,{'display':'By Publication Date - Oldest First', 'option': 'publication_date'}
 	,{'display':'By Created Date - Latest First', 'option': '-created_date'}
 	,{'display':'By Created Date - Oldest First', 'option': 'created_date'}
 	,{'display':'By Last Edited Date - Latest First', 'option': '-last_edited'}	
 	,{'display':'By Last Edited Date - Oldest First', 'option': 'last_edited'}						
 	,{'display':'By Rating - Highest First', 'option': '-rating'}
 	,{'display':'By Rating - Lowest First', 'option': 'rating'}
 	,{'display':'By Title', 'option': 'title'}	
	];

	$scope.selectedFilter = $scope.caseFilters[4].option;
	$scope.chartConfig1;
	$scope.chartConfig2;
	$scope.chartconfig3;

	getSortOptions();
	getDisplayStatus();
	getDevStatus();
	getDraftCases();
	getcurrentCases();
	getUpcomingCases();
	getPreviousCases();
	createChart1();
	createChart2();

	function getSortOptions() {
		ngCase.getSortOptions()
			.success(function(filters) {
		//		$scope.caseFilters = filters;
			//	$scope.selectedFilter = $scope.caseFilters[0].option;
			//	console.log($scope.displayStatus);
			})
			.error(function(err) {
				console.log('Unable to load statuses');
			});
	}

	function getDisplayStatus() {
		ngCase.getDisplayStatus()
			.success(function(statuses) {
				$scope.displayStatus = statuses;
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

	function getCaseRatingStats() {
		
	}

	function createChart1() {
			
			var chartCategories= [];
			var chartCategoriesHeading= [];
			var series = [];
			var serieData = [];
			var chartData = {};
		

			ngCase.getCaseRatingStats()
			.success(function(result) {
				serieData = result;
				var newSerie = {name: 'Rating', data : serieData}
				series.push(newSerie);
				chartData['series'] =  series;
			 $scope.chartConfig1 = { options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
		                                chart: {
		                                    type: 'pie',
		                                    polar: false
		                                    },
		                                tooltip: {
		                                	formatter: function() {
        										return '<b> count = ' + this.y + '</b>';
        									},
		                                    style: {
		                                        padding: 10,
		                                        fontWeight: 'bold'
		                                    }
		                                },
		                                plotOptions: {
											            pie: {
											                allowPointSelect: true,
											                cursor: 'pointer',
											                dataLabels: {
											                    enabled: true,
											                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
											                    style: {
											                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
											                    }
											                }
											            }
											        }
		                       },
		                                series: chartData.series,
		                                loading: false,
		                              //size (optional) if left out the chart will default to size of the div or something sensible.
		                                 //size: {
		                                 //  width: 450,
		                                //   height: 200
		                                // },
		                                title: {
		                                          text: "Rating",
		                                          style : {fontWeight: 'bold', fontSize:20}
		                                },
		                                //function (optional)
		                                func: function (chart) {
		                                 // $timeout(chart.reflow(),200);
		                                }
                              };    
			})
			.error(function(err) {
				console.log('Unable to load case data');
			});
	 
	}

	function createChart2() {
			
			var chartCategories= [];
			var chartCategoriesHeading= [];
			var series = [];
			var serieData = [];
			var chartData = {};
		

			ngCase.getCaseRatingStats()
			.success(function(result) {
				serieData = result;
				var newSerie = {name: 'Times Viewed', data : serieData}
				series.push(newSerie);
				chartData['series'] =  series;
			 $scope.chartConfig2 = { options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
		                                chart: {
		                                    type: 'bar',
		                                    polar: false
		                                    },
		                                tooltip: {
		                                	formatter: function() {
        										return '<b> count = ' + this.y + '</b>';
        									},
		                                    style: {
		                                        padding: 10,
		                                        fontWeight: 'bold'
		                                    }
		                                },
		                                plotOptions: {
											            pie: {
											                allowPointSelect: true,
											                cursor: 'pointer',
											                dataLabels: {
											                    enabled: true,
											                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
											                    style: {
											                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
											                    }
											                }
											            }
											        }
		                       },
		                                series: chartData.series,
		                                loading: false,
		                              //size (optional) if left out the chart will default to size of the div or something sensible.
		                                 //size: {
		                                 //  width: 450,
		                                //   height: 200
		                                // },
		                                title: {
		                                          text: "Top 5 viewed",
		                                          style : {fontWeight: 'bold', fontSize:20}
		                                },
		                                //function (optional)
		                                func: function (chart) {
		                                 // $timeout(chart.reflow(),200);
		                                }
                              };    
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