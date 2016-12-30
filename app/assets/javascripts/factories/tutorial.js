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

      this.t2 = new TimelineLite();
      this.tl = new TimelineLite();
      
      this.t2.fromTo(jaw, 1, {y: 90}, {y: 60});

      this.tl.fromTo(jaw, 1, {y: 60}, {y: 90});
      this.tl.add("scene2");
      this.tl.add(this.t2, 'scene2');
      this.tl.progress(1);

    };

    Tutorial.prototype.playTutorial = function() {
      this.tl.play(0);
    };

    Tutorial.prototype.playScene = function(scene) {

    };

    Tutorial.prototype.stopTutorial = function() {

    };



    return Tutorial;
  }]
);