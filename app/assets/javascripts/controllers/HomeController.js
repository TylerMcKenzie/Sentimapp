app.controller('HomeCtrl', [
  '$scope',
  '$http',
  'Auth',
  'highlighter',
  function($scope, $http, Auth, highlighter) {
    var ctrl = this;
    var bodyHtml = $('body');

    ctrl.$onInit = function() {
      // disable scroll
      $(document).on('scroll touchmove mousewheel', function(e) {
        e.preventDefault()
        e.stopPropagation();
        return false
      });
    };

    ctrl.scrollUp = function() {
      bodyHtml.animate({
        scrollTop: 0
      }, 1000);
    };

    ctrl.scrollDown = function() {
      bodyHtml.animate({
        scrollTop: $("[js-data='formPanel']").offset().top
      }, 1000);
    };

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