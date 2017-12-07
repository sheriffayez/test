(function() {
  // GetInfoController function with the DogService injected
  function GetInfoController(appService) {
    var vm = this;
    // setting vm.dogInfo to the value returned from DogService's getDogInformation method
    vm.newInfo = infoService.getDogInformation();
    console.log(vm.newInfo);
  }

  angular 
    .module("app")
    .controller("GetInfoController", GetInfoController);
})();