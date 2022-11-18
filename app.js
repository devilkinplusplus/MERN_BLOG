const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//collect static files in public folder
app.use(express.static("public"));
app.use(express.static("site"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/contact.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/blog.html"));
});
app.get("/blog-single", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/blog-single.html"));
});

app.listen(port, () => {
  console.log(`App listening on port : http://localhost:${port}`);
});
