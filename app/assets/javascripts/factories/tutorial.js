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
      function setPrompter(sceneNumber, locationX, locationY, display, bubbleDir) {
        // script for tutorial
        var script = [
                      'Welcome to Sentimapp, the sentiment analysis application.',
                      'I am Sentibot, I\'ll be your guide for this experience.',
                      'Let\'s take a look at how it works.',
                      'If you are logged in, you can name your samples here.',
                      'Here is where you provide your text to be analyzed.',
                      'Later there will be more methods to test text, but for now copy/paste will do.',
                      'Finally, hit this button to generate your sample',
                      'Let\'s give it a shot!'
                    ];

        // set prompter location
        prompter.css({left: locationX+'px', top: locationY+'px'});
        
        // set prompter text
        prompterP.text(script[sceneNumber]);

        if(bubbleDir === 'top') {
          prompter.removeClass('bottom');
          prompter.addClass('top');
        } else if(bubbleDir === 'bottom') {
          prompter.removeClass('top');
          prompter.addClass('bottom');
        }

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

      function focusOn(currSelect, prevSelect) {
        // turn on
        $(currSelect).addClass('focus');
        // turn off
        $(prevSelect).removeClass('focus');
      };

      // function to move body to control panel
      function scroll(location, duration) {
        Scroller.scrollTo(location, duration);
      };

      
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

        tl.call(setPrompter, [0, $window.width()/1.5, 75, 'show', 'top']);
        tl.add('talk');
        tl.add(jawBob, 'talk');
        tl.add('flicker');
        tl.add(eyeFlicker, 'flicker');
        tl.add('talk2', "+=3");
        tl.add(jawBob, 'talk2');
        tl.add('flicker2');
        tl.add(eyeFlicker, 'flicker2');
        tl.call(setPrompter, [1, $window.width()/1.5, 75, 'show', 'top'], this, 'talk2');
        tl.add('talk3', "+=3");
        tl.add(jawBob, 'talk3');
        tl.add('flicker3');
        tl.add(eyeFlicker, 'flicker3');
        tl.call(setPrompter, [2, $window.width()/1.5, 75, 'show', 'top'], this, 'talk3');
        tl.add('removePromp', '+=3');
        tl.call(setPrompter, [0, $window.width()/1.5, 75, 'hide'], this, 'removePromp');
        tl.add('finishWelcome');
        tl.call(scroll, [CPlocation, 1500], this, 'finishWelcome');

        return tl;

        // 5 seconds
      };

      function controlsInfo() {
        // set timeline
        var tl = new TimelineLite();

        tl.add('focusName');
        tl.call(focusOn, ['.form-name', ''], this, 'focusName');
        tl.add('talk');
        tl.call(setPrompter, [3, $window.width()/1.5, CPlocation+75, 'show', 'bottom']);
        tl.add('focusText', '+=3');
        tl.call(focusOn, ['.form-text', '.form-name'], this, 'focusText');
        tl.call(setPrompter, [4, $window.width()/1.25, CPlocation+175, '', 'bottom'], this, 'focusText');
        tl.add('talk2', '+=3');
        tl.call(setPrompter, [5, $window.width()/1.25, CPlocation+175, '', 'bottom'], this, 'talk2');
        tl.add('focusButton', '+=3');
        tl.call(focusOn, ['.form-button', '.form-text'], this, 'focusButton');
        tl.call(setPrompter, [6, $window.width()/1.25, CPlocation+175, '', 'bottom'], this, 'focusButton');
        tl.add('talk3', '+=3');
        tl.call(setPrompter, [7, $window.width()/1.25, CPlocation+175, '', 'bottom'], this, 'talk3');
        tl.add('finishControlsInfo', '+=2');
        tl.call(focusOn, ['', '.form-button'], this, 'finishControlsInfo');
        tl.call(setPrompter, [0, 0, 0, 'hide', 'bottom'], this, 'finishControlsInfo');


        return tl;        
      }

      // Main timeline
      tutAnimation = new TimelineLite({paused:true});

      // Add scenes to timeline
      
      tutAnimation.add('welcome')
      tutAnimation.add(welcome, 'welcome');
      tutAnimation.add('controls', '+=10.75');
      tutAnimation.add(controlsInfo, 'controls');

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