"use strict";
{

  const postFeed = {
    bindings: {
      list: "<"
    },

    template: `
    <h2>{{item.title}}</h2>
      <div>
        <p>{{item.body}}</p>
        <img src="">
      </div>
      `
  };





angular
  .module("app")
  .component("postFeed", postFeed);

}