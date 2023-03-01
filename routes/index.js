var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById, getCommentsForPostsById} = require('../middleware/posts');
var router = express.Router();

router.get('/',getRecentPosts, function(req, res, next) {
  res.render('index',{css: ["style.css"]});
});

router.get("/login", function(req, res){
  res.render('login');
});

router.get("/register", function(req, res){
  res.render('registration', {js:["validation.js"]});
}); 


router.get("/postimage",isLoggedIn, function(req, res){
  res.render('postimage', {css: ["style.css"]});
});

router.get("/posts/:id(\\d+)", getPostById,getCommentsForPostsById ,function(req, res){
  res.render('viewpost', {js: ["viewpost.js"]} );
});
module.exports = router;
