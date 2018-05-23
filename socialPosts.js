"use strict";
//parent comp

console.log("social posts parent working");

const social = {
  //creating ng-repeat posts and new post button

  //right now we are just trying to test to see if we can get anything at all working, much less get nested components to work. 
  template: `
  <button ng-click="$ctrl.openForm();">Add New Blog</button>
  <post ng-repeat="post in $ctrl.list" post="post"> </post>
  `,
  //need to add form to template above, like this... <post-form ng-show="$ctrl.formOpen" on-submit="$ctrl.onSubmit(newUser);"></post-form>


  controller: function () {
    
    const vm = this;
    // our array of posts
    vm.list = [
      {
        title: "My first blog", 
        body: "lorem blah blah blah blah blah "
      },
      {
        title: "My second blog", 
        body: "lorem blah blah blah blah blah "
      },
      {
        title: "My third blog", 
        body: "lorem blah blah blah blah blah "
      }
    ];
    console.log(vm.list);
  }
}


angular.module("app").component("social", social);