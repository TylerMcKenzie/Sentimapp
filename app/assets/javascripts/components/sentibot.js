function SentibotCtrl($scope, $element, $attrs, Tutorial) {
  var ctrl = this;

  Tutorial.init("svg3384");

};

app.component('sentibot', {
  templateUrl: 'home/_sentibot.html',
  controller: SentibotCtrl,
  bindings: {
  }
})