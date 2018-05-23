"use strict";

const socialPosts = {
  template: `
  <div id="container">
    <h1>Baby Twitter!!</h1>
    <button type="button" ng-click="$ctrl.openForm();">Add Thought</button>
    <post ng-repeat="post in $ctrl.postList" post="post"></post>
    <post-form ng-show="$ctrl.formOpen" on-submit="$ctrl.onSubmit(newUser);"></post-form>
  </div>
  `,
  controller: function() {
    const vm = this;
    vm.postList = [
      {subject: "Titlerino", message: "Lorem ipsum dolor sit amet."},
      {subject: "Titlerino", message: "Lorem ipsum dolor sit amet."},
      {subject: "Titlerino", message: "Lorem ipsum dolor sit amet."},
      {subject: "Titlerino", message: "Lorem ipsum dolor sit amet."},
      {subject: "Titlerino", message: "Lorem ipsum dolor sit amet."},
      {subject: "Titlerino", message: "Lorem ipsum dolor sit amet."}
    ];

    vm.openForm = () => {
      vm.formOpen = true;
    };

    vm.onSubmit = (item) => {
      vm.postList.unshift({
        subject: item.subject,
        message: item.message
      })
      item.subject = "";
      item.message = "";
      vm.formOpen = false;
      console.log();
    }
  }
};


angular.module("SocialMedia").component("socialPosts", socialPosts);