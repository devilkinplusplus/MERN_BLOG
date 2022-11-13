const http = require("http");
const fs = require("fs");

//listen files
const mainPage = fs.readFileSync("main.html");
const myPage = fs.readFileSync("ilkin.html");

const requestListener = function (req, res) {
  if (req.url === "/") {
    res.end(mainPage);
  } 
  else if (req.url === "/ilkin") {
    res.end(myPage);
  } 
  else {
    res.statusCode = 404;
    res.end("Cupa Not Found");
  }
};

const server = http.createServer(requestListener);
//url : localhost:8080
server.listen(8080, function () {
  console.log("Server started on : http://localhost:8080");
});
