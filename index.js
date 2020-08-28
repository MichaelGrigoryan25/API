const http = require("http");
const app = require("./app");
const server = http.createServer(app);
var port = process.env.PORT || 80;

server.listen(port);
console.log(`Listening at port: ${port}`)