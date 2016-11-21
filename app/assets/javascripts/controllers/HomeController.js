angular.module('controllers', [])
.controller('HomeCtrl', [
  '$scope',
  '$location',
  'Auth',
  function($scope, $location, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
  }]
);