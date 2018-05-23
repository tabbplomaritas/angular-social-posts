"use strict";{


const postForm = {

  bindings: {
    addPost: "&"
  },

  template: `
  <button ng-click="$ctrl.showForm();">Add Thought</button>
  <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost }); $ctrl.closeForm();" ng-show="$ctrl.show">
  <p ng-click="$ctrl.closeForm();">XXXX</p>
    <h4>New Post</h4>
    <label>Title</label>
    <input expand type="text" ng-model="$ctrl.newPost.title">
    <label>Thought</label>
    <textarea expand ng-model="$ctrl.newPost.thought""></textarea>
    <button>Add</button>
  </form>
  `
,

  controller: function() {
    const vm = this;
    vm.showForm = () => {
      vm.show = true;
    }
    vm.closeForm = () => {
      vm.show = false;
      vm.newPost = {};
    }
  }

}

  angular
  .module("app")
  .component("postForm", postForm);

}