const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const issAPI = require("./routes/iss-api");
const issAPIWeb = require("./routes/iss-api-web");

const randomNumberAPI = require("./routes/random-number-api");
const randomNumberAPIWeb = require("./routes/random-number-api-web");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/iss-api", issAPI);
app.use("/iss", issAPIWeb);
app.use("/random-number-api", randomNumberAPI);
app.use("/random-number", randomNumberAPIWeb);

module.exports = app;