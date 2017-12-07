(function() {
var componentTwo = {
  controller: "appController",
  bindings: {
    list: "<"
  },
  template: `
      <li hover-state ng-repeat="number in $ctrl.list | filter:filter track by $index">{{number}}<a ng-click="$ctrl.remove_item($index)" href=""><img src = "images/close.png"></a> </li>
  `

};
angular
.module("app")
.component("componentTwo", componentTwo);
})();