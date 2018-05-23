"use strict";
//parent comp

console.log("social posts parent working");

const social = {

  template: `

  <h1>Angular.js Social Posts</h1>  
  
  <post-form add-post="$ctrl.addPost(newPost);"></post-form>

  <section>
    <posts ng-repeat="post in $ctrl.myPosts" post="post"> </posts>
  </section>
  `,

  controller: function () {
    const vm = this;
    // our array of posts
    vm.myPosts = [
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
    console.log(vm.myPosts);

   

    vm.addPost = (newPost) =>{
     
      vm.myPosts.push({
        title: newPost.title,
        thought: newPost.thought
      })
      console.log(newPost);

    }
    

  }
}


angular.module("app").component("social", social);