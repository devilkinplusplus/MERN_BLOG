const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const bodyParser = require("body-parser");

//connect to database
mongoose.connect("mongodb://localhost/nodeblog_db");

//collect static files in public folder
app.use(express.static("public"));

//exphbs.engine() method runs layout/main defaultly
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//body-parser for reaching data which cames from form
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//call routes where you need
const main = require("./routes/main");
const blogs = require("./routes/blogs");
//call as middleware
app.use("/", main);
//if requested /blog run this middleware
app.use("/blog", blogs);

app.listen(port, () => {
  console.log(`App listening on port : http://localhost:${port}`);
});
