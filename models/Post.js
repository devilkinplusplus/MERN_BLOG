const mongoose = require("mongoose");

//schema : set the fields for database
const PostSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Date, default: Date.now },
  post_image: { type: String, require: true },
});

//for using other files export model
module.exports = mongoose.model("Post", PostSchema);
