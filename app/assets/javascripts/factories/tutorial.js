app.factory("Tutorial", [
  function() {
    // set tutorial global
    var tutAnimation;

    function Tutorial(svgId) {
      var svg;
      
      var svgTest = $("#"+svgId);

      if (svgTest.prop('tagName') === 'svg') {
        svg = svgTest;
      } else {
        throw new Error("Only id's pointing to a svg are compatible.");
      }
      
      var fullJaw = svg.find('#full_jaw');
      var jaw = svg.find('#jaw');
      var jawL = svg.find('#jaw_lights');
      var leftN = svg.find('#nut_left');
      var rightN = svg.find('#nut_right');
      var eyes = svg.find('#eyes');
      var eyeL = svg.find('#eye_glow');

      // Main timeline
      tutAnimation = new TimelineLite({paused:true});
      
      // animations
      function jawBob() {
        var jawBob = new TimelineLite();
        
        jawBob.to(fullJaw, 0.1875, {y: 10})
              .to(fullJaw, 0.1875, {y: 0})
              .to(fullJaw, 0.1875, {y: 10})
              .to(fullJaw, 0.1875, {y: 0});

        return jawBob;
      };

      function eyeFlicker() {
        var eyeFlicker = new TimelineLite();

        eyeFlicker.to(eyeL, 0.15, {opacity: 1})
                  .to(eyeL, 0.15, {opacity: 0})
                  .to(eyeL, 0.15, {opacity: 1})
                  .to(eyeL, 0.15, {opacity: 0});
        
        return eyeFlicker;
      };

      // scenes
      function scene1() {

      };

      // Add scenes to timeline (--rough first then seek in app--)
      tutAnimation.add(jawBob(), 'jawBob1');
      tutAnimation.add("eyeFlicker", "-=0.75");
      tutAnimation.add(eyeFlicker(), "eyeFlicker");
      tutAnimation.add("jawBob2", "-=1.5");
      tutAnimation.add(jawBob(), "jawBob2");

    };

    Tutorial.prototype.playTutorial = function() {
      tutAnimation.play(0);
    };

    Tutorial.prototype.playScene = function(scene) {

    };

    Tutorial.prototype.stopTutorial = function() {

    };



    return Tutorial;
  }]
);