const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {});

module.exports = app;
