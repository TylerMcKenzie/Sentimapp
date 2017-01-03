app.factory("Tutorial", [
  'Scroller',
  function(Scroller) {
    // set tutorial global
    var tutAnimation;

    function Tutorial(element) {
      var sentibot = element;

      // elements
      var fullJaw = sentibot.find('#full_jaw');
      var jaw = sentibot.find('#jaw');
      var jawL = sentibot.find('#jaw_lights');
      var jawLG = sentibot.find('#jaw_light_glow');
      var leftN = sentibot.find('#nut_left');
      var rightN = sentibot.find('#nut_right');
      var eyes = sentibot.find('#eyes');
      var eyeL = sentibot.find('#eye_glow');
      var prompter = sentibot.find('.prompter');
      var prompterP = prompter.find('p');
      
      // postitioning vars
      var $window = $(window);
      var CPlocation = sentibot.offset().top+sentibot.height();

      // provide way to set prompt text
      function setPrompter(sceneNumber, locationX, locationY, display) {
        // script for tutorial
        var script = [
                      'Welcome to Sentimapp, the sentiment analysis application.',
                      'I am Sentibot, I\'ll be your guide for this experience.',
                      'Let\'s take a look at our controls.'
                    ];

        // set prompter location
        prompter.css({left: locationX+'px', marginTop: locationY+'px'});
        
        // set prompter text
        prompterP.text(script[sceneNumber]);

        // show/hide the prompter
        if(display === 'show') {
          showPrompter();
        } else if(display === 'hide') {
          hidePrompter();
        }

      };

      function showPrompter() {
        prompter.show();
      };

      function hidePrompter() {
        prompter.hide();
      };

      // function to move body to control panel
      function scroll(location, duration) {
        Scroller.scrollTo(location, duration);
      };

      // Main timeline
      tutAnimation = new TimelineLite({paused:true});
      // tutAnimation = new TimelineLite();
      
      // animations
    
      // 0.75 seconds
      function jawBob() {
        var jawBob = new TimelineLite();
        
        jawBob.to(fullJaw, 0.1875, {y: 10})
              .to(fullJaw, 0.1875, {y: 0})
              .to(fullJaw, 0.1875, {y: 10})
              .to(fullJaw, 0.1875, {y: 0});


        return jawBob;
      };

      // 0.60 seconds
      function eyeFlicker() {
        var eyeFlicker = new TimelineLite();

        eyeFlicker.to(eyeL, 0.15, {opacity: 1})
                  .to(eyeL, 0.15, {opacity: 0})
                  .to(eyeL, 0.15, {opacity: 1})
                  .to(eyeL, 0.15, {opacity: 0});
        
        return eyeFlicker;
      };

      // scenes
      function welcome() {
        // set timeline
        var tl = new TimelineLite();

        tl.call(setPrompter, [0, $window.width()/1.5, 75, 'show']);
        tl.add('talk');
        tl.add(jawBob, 'talk');
        tl.add('flicker');
        tl.add(eyeFlicker, 'flicker');
        tl.add('talk2', "+=2");
        tl.add(jawBob, 'talk2');
        tl.add('flicker2');
        tl.add(eyeFlicker, 'flicker2');
        tl.call(setPrompter, [1, $window.width()/1.5, 75, 'show'], this, 'talk2');
        tl.add('talk3', "+=2");
        tl.add(jawBob, 'talk3');
        tl.add('flicker3');
        tl.add(eyeFlicker, 'flicker3');
        tl.call(setPrompter, [2, $window.width()/1.5, 75, 'show'], this, 'talk3');
        tl.add('removePromp', '+=1');
        tl.call(setPrompter, [0, $window.width()/1.5, 75, 'hide'], this, 'removePromp');
        tl.add('goto');
        tl.call(scroll, [CPlocation, 1500], this, 'goto');

        return tl;
      };



      // Add scenes to timeline (--rough first then seek in app--)
      
      tutAnimation.add('welcome')
      tutAnimation.add(welcome, 'welcome');

    };

    Tutorial.prototype.playTutorial = function() {
      tutAnimation.play(0);
    };

    Tutorial.prototype.playScene = function(scene) {
      tutAnimation.seek(scene);
    };

    Tutorial.prototype.stopTutorial = function() {
      tutAnimation.kill();
    };



    return Tutorial;
  }]
);