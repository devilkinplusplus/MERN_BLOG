const express = require("express");
const router = express.Router();
const postSchema = require("../models/Post");

router.get("/", (req, res) => {
  postSchema
    .find({})
    .lean()
    .then((posts) => {
      res.render("site/blog", { posts: posts });
    });
});

router.get("/new", (req, res) => {
  res.render("site/addPost");
});

router.post("/new", (req, res) => {
  postSchema.create(req.body);
  res.redirect("/blog");
});

//id parametr needs
router.get("/:id", (req, res) => {
  postSchema.findById(req.params.id).then((post) => {
    res.render("site/blog_single", { post: post.toJSON() });
  });
});

module.exports = router;
