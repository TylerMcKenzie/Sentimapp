app.controller('NavCtrl', [
  '$scope',
  'Auth',
  function($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;

    if($scope.signedIn()) {
      Auth.currentUser().then(function(user) {
        $scope.user = user;
      });
    }

    $scope.logout = Auth.logout;

    // Listen for Devise events
    $scope.$on('devise:new-registration', function(e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function(e, user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function(e, user){
      $scope.user = {};
    });
  }]
);