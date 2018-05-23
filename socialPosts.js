"use strict";
//parent comp

console.log("social posts parent working");

const social = {
  //creating ng-repeat posts and new post button
  template: `
  <h1>{{$ctrl.message}}</h1>
  `,

  controller: function () {
    console.log("is anything WORKINNNNNGNGNGNG");
    const vm = this;
    vm.message = "wut in de hail";
    //our array of posts
    // vm.list = [
    //   {
    //     title: "My first blog", 
    //     body: "lorem blah blah blah blah blah "
    //   }
    // ];
    
  }
}


  angular.module("app").component("social", social);