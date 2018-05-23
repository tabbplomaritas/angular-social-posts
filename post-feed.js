"use strict";
{

  const posts = {
    bindings: {
      post: "<"
    },

    template: `
    <section class="blogPost">
      <h2>{{$ctrl.post.title}}</h2>
        <div class = "postBody">
          <p>{{$ctrl.post.body}}</p>
          <p>X</p>
        </div>
      </section>
      `
  };

angular
  .module("app")
  .component("posts", posts);

}