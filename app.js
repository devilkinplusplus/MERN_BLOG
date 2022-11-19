const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

//collect static files in public folder
app.use(express.static("public"));

//exphbs.engine() method runs layout/main defaultly
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("site/index");
});

app.get("/about", (req, res) => {
  res.render("site/about");
});

app.get("/contact", (req, res) => {
  res.render("site/contact");
});

app.get("/blog", (req, res) => {
  res.render("site/blog");
});

app.get("/blog-single", (req, res) => {
  res.render("site/blog_single");
});

app.get("/register", (req, res) => {
  res.render("site/register");
});

app.get("/login", (req, res) => {
  res.render("site/login");
});

app.listen(port, () => {
  console.log(`App listening on port : http://localhost:${port}`);
});
