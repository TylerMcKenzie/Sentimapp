function ControlPanelCtrl($scope, $element, $attrs, ApiCoordinator) {
  var ctrl = this;

  ctrl.$onInit = function() {
    var panelForm = $(".control-panel");
    panelForm.css({height: $(window).height()});
  };

  ctrl.submit = function(form) {
    var api = ApiCoordinator.call(form);
  }

};

app.component('controlPanel', {
  templateUrl: 'home/_control-panel.html',
  controller: ControlPanelCtrl,
  bindings: {}
});