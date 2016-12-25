app.factory('ApiCoordinator', [
  '$http',
  function($http) {

    function filter(form) {
      // Will filter responses when that time comes. Starting with just text.
    };

    function call(form) {

      return $http({
        method: 'POST',
        url: '/call',
        params: form
      })
      .then(function(res){
        return res.data;
      });
    };

    return {
      call: call
    }
  }]
);