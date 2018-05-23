"use strict";

  function expand(){
    return{
      restrict: "A",
      link: function($scope, $element, $attrs){
        $element.on("focus", () => {
          $element.css("background-color", "lightpink");
          // $element.css("height", "100px");
        });
        
        $element.on("blur", () => {
          $element.css("background-color", "initial");
          $element.css("height", "initial");
        });
      }
    }
  }

  angular
    .module("app")
    .directive("expand", expand);





