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




module.exports = router;
