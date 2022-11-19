const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/index");
});

router.get("/about", (req, res) => {
  res.render("site/about");
});

router.get("/contact", (req, res) => {
  res.render("site/contact");
});

router.get("/blog", (req, res) => {
  res.render("site/blog");
});

router.get("/blog-single", (req, res) => {
  res.render("site/blog_single");
});

router.get("/register", (req, res) => {
  res.render("site/register");
});

router.get("/login", (req, res) => {
  res.render("site/login");
});

router.get("/blog/new", (req, res) => {
  res.render("site/addPost");
});



module.exports = router;
