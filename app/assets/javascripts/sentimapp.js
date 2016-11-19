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

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
])