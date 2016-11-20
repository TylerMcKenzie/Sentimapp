angular.module('sentimapp' ,['ui.router', 'controllers'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'../assets/templates/home/_home.html',
      controller: 'MainCtrl'
    });

    // Make sure users stay on the Angular portion of app
    $urlRouterProvider.otherwise('/');

    // Set path to regular formatting
    $locationProvider.html5Mode(true);
  }
])