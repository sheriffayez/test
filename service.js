(function() {
  
  function appService($location) {
    
    var list = {};

  
    return {
      setNewInformation: setNewInformation,
      getNewInformation: getNewInformation
    };

    
    function appController(newList) {
      list = newList;
      console.log(list);
      
      $location.path("/input-stuff");
    }
    
  
    function getNewInformation() {
      return list;
    }
  }

  angular
    .module("app")
    .factory("appService", appService);
})();