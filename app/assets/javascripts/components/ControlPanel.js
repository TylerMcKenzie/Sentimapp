function ControlPanelCtrl($scope, $element, $attrs, ApiCoordinator) {
  var ctrl = this;

  ctrl.$onInit = function() {
    var panelForm = $(".control-panel");
    panelForm.css({height: $(window).height()});
  };

  ctrl.setSample = function(sample) {
    ctrl.sample = angular.copy(sample);
  };

  ctrl.submit = function(form) {
    ApiCoordinator.call(form).then(function(sample){
      ctrl.setSample(sample);
    });
    // ctrl.sample = {content: "This is a good post", keywords : [{text: 'good post'}]};
    ctrl.runAnim.showSample();
  };
};

app.component('controlPanel', {
  templateUrl: 'home/_control-panel.html',
  controller: ControlPanelCtrl,
  bindings: {
  }
});