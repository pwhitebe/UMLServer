var mmwrcase = angular.module('app', [
  //'ngRoute'
  ,'ui.router'
  ,'ngResource'
  ,'ngAnimate'
  ,'ngSanitize'
  ,'LocalStorageModule'
  ,'ui.bootstrap'
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
          }
        }
        
      })

      // .state('content', {
      //   parent:'home',
      //   views:{
      //     'currentCase':{
      //       templateUrl:'partials/home/currentCase',
      //       controller:'currentCaseCtrl'
      //     }
      //   }
      // })
}]);

// angular.module('app').run(function($rootScope,$location) {
//   $rootScope.$on('$routeChangeError', function(evt,current, previous,rejection) {
//     if(rejection === 'not authorized'){
//       $location.path('/main');
//     }
//   }) 
// });