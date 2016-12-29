app.factory("Tutorial", [
  function() {
    var svg;
    function init(svgId) {
      var svgTest = $("#"+svgId);

      if (svgTest.prop('tagName') === 'svg') {
        svg = svgTest;
      } else {
        console.log("What is this?");
      }
      console.log(this);
    };

    function playTutorial() {

    };

    function pauseTutorial() {

    };

    return {
      init: init
    }
  }]
)