function SentibotCtrl($scope, $element, $attrs, Tutorial) {
  var ctrl = this;

  var tutorial = new Tutorial("svg3384");
  console.log(tutorial);
  tutorial.playTutorial();
};

app.component('sentibot', {
  templateUrl: 'home/_sentibot.html',
  controller: SentibotCtrl,
  bindings: {
  }
})