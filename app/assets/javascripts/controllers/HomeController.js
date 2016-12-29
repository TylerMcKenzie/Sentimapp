app.controller('HomeCtrl', [
  '$scope',
  '$http',
  'Auth',
  function($scope, $http) {
    var ctrl = this;
    var bodyHtml = $('body');

    ctrl.$onInit = function() {
      // disable scroll
      bodyHtml.on('scroll touchmove mousewheel', function(e) {
        e.preventDefault()
        e.stopPropagation();
        return false
      });
    };

    ctrl.scrollUp = function() {
      if ( bodyHtml.scrollTop() == $("[js-data='formPanel']").offset().top ) {
        bodyHtml.animate({
          scrollTop: 0
        }, 1000);
      } else if ( bodyHtml.scrollTop() == $("[js-data='sample-cont']").offset().top ) {
        bodyHtml.animate({
          scrollTop: $("[js-data='formPanel']").offset().top
        }, 1000);
      }
    };

    ctrl.scrollDown = function() {
      if ( bodyHtml.scrollTop() == $("[js-data='formPanel']").offset().top ) {
        bodyHtml.animate({
          scrollTop: $("[js-data='sample-cont']").offset().top
        }, 1000);
      } else {
        bodyHtml.animate({
          scrollTop: $("[js-data='formPanel']").offset().top
        }, 1000);
      }
    };

  }]
);