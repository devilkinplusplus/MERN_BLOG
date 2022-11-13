const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, Node JS!");
};

const server = http.createServer(requestListener);
//url : localhost:8080
server.listen(8080);
