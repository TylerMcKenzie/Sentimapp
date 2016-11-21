angular.module('controllers')
.controller('LoginCtrl', [
  '$scope',
  'Auth',
  '$state',
  function($scope, Auth, $state) {
    $scope.login = function() {
      Auth.login($scope.user).then(function(){
        $state.go('home');
      });
    };
  }]
);