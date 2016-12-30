app.factory("Tutorial", [
  function() {
    function Tutorial(svgId) {
      var svg;
      
      var svgTest = $("#"+svgId);

      if (svgTest.prop('tagName') === 'svg') {
        svg = svgTest;
      } else {
        throw new Error("Only id's pointing to a svg are compatible.");
      }

      var jaw = svg.find('#jaw');
      var jawL = svg.find('#jaw_lights');
      var leftN = svg.find('#nut_left');
      var rightN = svg.find('#nut_right');
      var eyes = svg.find('#eyes');
      var eyeL = svg.find('#eye_glow');

      var tl = new TimelineLite();
      console.log(tl)

    };

    Tutorial.prototype.playTutorial = function() {
    };

    Tutorial.prototype.playScene = function(scene) {

    };

    Tutorial.prototype.stopTutorial = function() {

    };



    return Tutorial;
  }]
);