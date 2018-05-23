"use strict";{


const post = {
  bindings: {
    post: "<"
  },

  template:`
  <p>{{$ctrl.post.title}}</p>
    <div>
      <p>{{$ctrl.post.body}}</p>
      <p>X</p>
    </div>
    `
}



  angular
  .module("app")
  .component("post", post);

}