const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//if get request for '/' send this file path
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "main.html")); //listen file with express.js
});

//if get request for '/ilkin' send this file path
app.get("/ilkin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "ilkin.html"));
});

//get request with query string
app.get("/users/:userId/movies/:moviesId", (req, res) => {
  res.send(
    `<h2>Username : ${req.params.userId} </h2>
      <h3>Movies which is Ilkin watched</h3>
       <ul>
       <li>Life in a Year</li>
       <li>Goal</li>
       <li>Jobs</li>
       <li>Birdge to terrahopia</li>
       
       </ul>
       `
  );
});

app.listen(port, () => {
  console.log(`App listening on port : http://localhost:${port}`);
});

/* Node js */
// const http = require("http");
// const fs = require("fs");

// //listen files with node.js
// const mainPage = fs.readFileSync("main.html");
// const myPage = fs.readFileSync("ilkin.html");

// const requestListener = function (req, res) {
//   if (req.url === "/") {
//     res.end(mainPage);
//   }
//   else if (req.url === "/ilkin") {
//     res.end(myPage);
//   }
//   else {
//     res.statusCode = 404;
//     res.end("Cupa Not Found");
//   }
// };

// const server = http.createServer(requestListener);
// //url : localhost:8080
// server.listen(8080, function () {
//   console.log("Server started on : http://localhost:8080");
// });
