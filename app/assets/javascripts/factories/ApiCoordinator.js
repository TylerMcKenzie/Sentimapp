app.factory('ApiCoordinator', [
  '$http',
  function($http) {
    function filter(form) {
      if(form.text){
        $http({
          method: 'GET',
          url: '/call',
          params: form
        }).then(function(res){
          console.log(res);
        });
      }
    };

    function call(form) {
      filter(form);
    };

    return {
      call: call
    }
  }]
);