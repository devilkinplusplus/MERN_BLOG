const express = require("express");
const router = express.Router();
const postSchema = require("../models/Post");
const path = require("path");

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
  let post_image = req.files.post_image;

  //follow the path and save file name here :
  //mv() comes from express-fileupload and move our file to path we choose
  post_image.mv(
    path.resolve(__dirname, "../public/img/post_images", post_image.name)
  );

  postSchema.create({
    ...req.body,
    post_image: `/img/post_images/${post_image.name}`,
  });
  res.redirect("/blog");
});

//id parametr needs
router.get("/:id", (req, res) => {
  postSchema.findById(req.params.id).then((post) => {
    res.render("site/blog_single", { post: post.toJSON() });
  });
});

module.exports = router;
