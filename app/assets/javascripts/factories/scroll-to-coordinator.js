app.factory('Scroller', [
  function() {
    var body = $('body');

    function scrollTo(location, speed) {
      body.animate({scrollTop: location}, speed);
    };

    return {
      scrollTo: scrollTo
    };
  }]
);