var mmwrcase = angular.module('app', [
  //'ngRoute'
  ,'ui.router'
  ,'ngResource'
  ,'ngAnimate'
  ,'ngSanitize'
  ,'LocalStorageModule'
  ,'ui.bootstrap'
  ,'ui.bootstrap.datetimepicker'
  ,'chieffancypants.loadingBar'
  ,'angulartics'
  ,'angulartics.google.analytics'
]);


//to prevent IE caching
mmwrcase.config([
    '$httpProvider', function ($httpProvider) {
        // Initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        // Enables Request.IsAjaxRequest() in ASP.NET MVC
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        // Disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    }
])

mmwrcase.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // Home states and nested views
      .state('home', {
        url:'/',
        views: {
          '': {
            templateUrl: 'partials/home'
          },
          'currentCase@home': {
            templateUrl: 'partials/home/currentCase',
            controller:'currentCaseCtrl'
          },
          'previousCase@home': {
            templateUrl: 'partials/home/previousCase',
            controller:'previousCaseCtrl'
          },
          'linkBox@home': {
            templateUrl: 'partials/home/linkBox'
          },
          'upcomingCase@home':{
            templateUrl: 'partials/home/upcomingCase',
            controller:'upcomingCaseCtrl'
          },
          'footer@home':{
            templateUrl:'partials/footer'
          }
        }
        
      })
      .state('overview', {
        url:'/overview/:caseID',
        templateUrl: 'partials/case/overview',
        controller:'overviewCtrl'
      })
      .state('test', {
        url:'/test/:testType/:caseID',
        templateUrl: 'partials/case/test',
        controller: 'testCtrl'
      })
      .state('results', {
        url:'/results/:caseID',
        templateUrl: 'partials/case/results',
        controller:'resultsCtrl',
        params : {testType: null, questionID : null, selectedAnswerID : null}
      })
      .state('abstract', {
        url:'/abstract/:caseID',
        templateUrl: 'partials/case/abstract',
        controller: 'abstractCtrl'
      })
      .state('additionalInfo', {
        url:'/additionalInfo/:caseID',
        templateUrl: 'partials/case/additionalInfo',
        controller: 'additionalInfoCtrl'
      })
      .state('dashboard', {
        url:'/dashboard',
        templateUrl : 'partials/dashboard',
        controller  : 'dashboardCtrl' 
      })

}]);

// angular.module('app').run(function($rootScope,$location) {
//   $rootScope.$on('$routeChangeError', function(evt,current, previous,rejection) {
//     if(rejection === 'not authorized'){
//       $location.path('/main');
//     }
//   }) 
// });