function SampleCtrl($scope, $sanitize, $element, $attrs, highlighter, Scroller) {
  var ctrl = this;
  ctrl.$onInit = function() {
    var sampleCont = $(".sample-cont");
    var sampleTop = sampleCont.offset().top;
    sampleCont.css({height: $(window).height()});

    ctrl.animate = {
      showSample: function() {
        Scroller.scrollTo(sampleTop, 1000);
      }
    };
  };

  ctrl.cleanHighlight = function(content, keys) {
    var highlightedContent = highlighter.highlight(content, keys);
    var cleanContent = $sanitize(highlightedContent);
    return cleanContent;
  };

  ctrl.$onChanges = function(changes) {
    if(changes.sample.currentValue != undefined) {
      ctrl.sample.content = ctrl.cleanHighlight(ctrl.sample.content, ctrl.sample.keywords);
    }
  };

};

app.component('sample', {
  bindings: {
    animate: '=',
    sample: '<'
  },
  templateUrl: 'home/_sample.html',
  controller: SampleCtrl
});