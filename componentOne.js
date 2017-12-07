(function(){
var componentOne = {
  controller: "appController",
  template: `
  <form ng-controller="appController as controller">
    <div>ng-view</div>
    <input ng-model="filter" type="text" placeholder="Search List"></input>
    <ol>
      <ng-view list="$ctrl.list"></ng-view>
    </ol>
    <input ng-model="controller.add_items" type="text" placeholder="Item to Add"></input>
    <button ng-click="controller.add_item(controller.add_items)">Add</button>
  </form>
  `
};
angular
.module("app")
.component("componentOne", componentOne);
})();