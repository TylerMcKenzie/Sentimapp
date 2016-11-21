angular.module('sentimapp' ,['ui.router', 'templates', 'controllers', 'Devise'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // Make sure users that want to explore come home
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'home/_home.html',
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'user/_login.html',
      controller: 'LoginCtrl',
      onEnter: [
      '$state',
      'Auth',
      function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        });
      }]
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'user/_signup.html',
      controller: 'RegisterCtrl',
      onEnter: [
      '$state',
      'Auth',
      function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        });
      }]
    });

  }
])