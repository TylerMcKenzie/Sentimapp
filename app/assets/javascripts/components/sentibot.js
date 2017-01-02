function SentibotCtrl($scope, $element, $attrs, Tutorial) {
  var ctrl = this;
  
  var tutorial = new Tutorial($element);

  console.log(tutorial);

  $('body').on('keypress', function(e) {
    if (e.key === 'p') {
      tutorial.playTutorial();
    }
  });
};

app.component('sentibot', {
  templateUrl: 'home/_sentibot.html',
  controller: SentibotCtrl,
  bindings: {
  }
})