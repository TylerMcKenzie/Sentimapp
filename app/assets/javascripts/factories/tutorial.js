app.factory("Tutorial", [
  function() {
    // set tutorial global
    var tutAnimation;

    function Tutorial(element) {
      var sentibot = element;

      // elements
      var fullJaw = sentibot.find('#full_jaw');
      var jaw = sentibot.find('#jaw');
      var jawL = sentibot.find('#jaw_lights');
      var leftN = sentibot.find('#nut_left');
      var rightN = sentibot.find('#nut_right');
      var eyes = sentibot.find('#eyes');
      var eyeL = sentibot.find('#eye_glow');
      var prompter = sentibot.find('.prompter');
      var prompterP = prompter.find('p');
      
      // postitioning vars
      var $window = $(window);

      // provide way to set prompt text
      function setPrompter(sceneNumber, locationX, locationY) {
        // script for tutorial
        var script = [
                      'Welcome to Sentimapp, the sentiment analysis application.',
                      'I am Sentibot, I\'ll be your guide for this app.',
                      'Let\'s take a look at our controls.'];

        prompter.css({left: locationX+'px', marginTop: locationY+'px'});
        prompterP.text(script[sceneNumber]);

      };

      setPrompter(0, 0, 0);

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