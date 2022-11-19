const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

//connect to database
mongoose.connect("mongodb://localhost/nodeblog_db");

//collect static files in public folder
app.use(express.static("public"));

//exphbs.engine() method runs layout/main defaultly
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//call where you need
const main  = require("./routes/main");
//call as middleware
app.use("/", main);

app.listen(port, () => {
  console.log(`App listening on port : http://localhost:${port}`);
});
