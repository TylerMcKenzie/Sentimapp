app.filter('escapeHtml', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});