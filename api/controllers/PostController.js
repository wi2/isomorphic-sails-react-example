/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var routes = require('../../components/routes.js');

module.exports = {
  home: function(req, res) {
    renderTo(routes, res.view, '/', {title:'home'})
  },
  articles: function(req, res) {
    Post.find().exec(function(err, posts){
      renderTo(routes, res.view, '/articles', {title:'articles'}, {items:posts});
    });
  }
};

