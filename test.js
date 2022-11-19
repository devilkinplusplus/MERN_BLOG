// const mongoose = require("mongoose");
// const Post = require("./models/Post");

// mongoose.connect("mongodb://localhost/nodeblog_test_db");

//Create
// Post.create(
//   {
//     title: "First blog",
//     content: "first field in mongo db using node js",
//   },
//   (error, post) => {
//     console.log(error, post);
//   }
// );

//Read with condition
// Post.find(
//   {
//     title: "First blog",
//   },
//   (error,post) => {
//     console.log(error);
//     console.log(post);
//   }
// );

//Read All
// Post.find({}, (error, post) => {
//   console.log(error, post);
// });

//update
/* Post.findByIdAndUpdate(
  "6378bb6d5b1c5155e33243cf",
  {
    title: "Updated with mongoose"
  },
  (error, post) => {
    console.log(error, post);
  }
);
 */

//Delete
// Post.findByIdAndDelete("6378bb6d5b1c5155e33243cf",(error,post)=>{
//    console.log(error,post);
// })
