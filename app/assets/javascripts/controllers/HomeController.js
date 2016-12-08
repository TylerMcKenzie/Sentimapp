app.controller('HomeCtrl', [
  '$scope',
  '$http',
  'Auth',
  'highlighter',
  function($scope, $http, Auth, highlighter) {
    var ctrl = this;

    ctrl.call = function(form) {
      var req = {
        method: 'GET',
        url: '/call',
        params: form,
      };

      // $scope.text = highlighter.highlight("this is a good post", ['good', 'post']);
      // $http(req).then(function(response) {
      //   var text = highlighter.highlight(response.data.content, response.data.keywords);
      //   $scope.text = text;
      // });
    };

  }]
);