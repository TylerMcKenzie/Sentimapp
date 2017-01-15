app.controller('HomeCtrl', [
  '$scope',
  '$http',
  'Scroller',
  function($scope, $http, Scroller) {
    var ctrl = this;
    var bodyHtml = $('body');
    var formPos, sampPos;

    ctrl.$onInit = function() {
      // disable scroll
      bodyHtml.on('scroll touchmove mousewheel', function(e) {
          e.preventDefault()
          e.stopPropagation();
          return false
      });

      setTimeout(function() {
        formPos = $("[js-data='formPanel']").offset().top;
        sampPos = $("[js-data='sampleCont']").offset().top;
      });
    };

    ctrl.scrollUp = function() {
      if ( bodyHtml.scrollTop() == formPos ) {
        Scroller.scrollTo(0, 1000);
      } else if ( bodyHtml.scrollTop() == sampPos ) {
        Scroller.scrollTo(formPos, 1000);
      }
    };

    ctrl.scrollDown = function() {
      if ( bodyHtml.scrollTop() == formPos ) {
        Scroller.scrollTo(sampPos, 1000);
      } else {
        Scroller.scrollTo(formPos, 1000);
      }
    };

  }]
);