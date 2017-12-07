(function(){
  function changingStuff() {
    return {
      controller: "appController as ctrl",
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("mouseenter", function() {
          $scope.$apply(function() {
            $element.css("background-color", "pink");
            $element.css("transition", "0.3s ease");
          });
        });
        $element.on("mouseleave", function() {
          $scope.$apply(function() {
            $element.css("background-color", "white");
            $element.css("transition", "0.3s ease");
          });
        });
      }
    }
  }
  angular
    .module("app")
    .directive("changingStuff", changingStuff);
})();