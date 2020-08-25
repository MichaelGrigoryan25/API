const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const issRoute = require("./routes/iss-location");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views")
app.use("/iss", issRoute);

module.exports = app;
