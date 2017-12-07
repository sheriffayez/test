(function() {
  
  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
      
        .when("/input-stuff", {
          
          template: `
          <input ng-model="info.info.item1">
          <input ng-model="info.info.item2">
          <button ng-click="info.addNewInfo(info.info);">set info</button>
          `,
          
          controller: "appController as info"
        })
        
        .when("/other-stuff", {
          
          template: `<p> {{ info.info.item1 }} {{ info.info.item2 }} </p>`,
          
          controller: "GetInfoController as info"
        })
        
    });
})();