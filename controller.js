(function() {
  function appController() {
    var vm = this;
    vm.list = ["shirt", "socks", "phone", "gift"];

    vm.add_item = function(item) {
    vm.list.push(item);
    vm.add_items = "";
    };


  }
  angular
  .module("app")
  .controller("appController", appController);
})();