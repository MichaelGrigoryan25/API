const express = require("express");
const isOnline = require("is-online");
const router = express.Router();

router.get("/", async (req, res) => {
  var apiStatus;
  var randomNumber = Math.random();
  var randomInteger = Math.floor(Math.random() * 10);

  if (await isOnline()) {
    apiStatus = "Online";
  } else {
    apiStatus = "Offline";
  }

  res.json({
    results: {
      randomNum: randomNumber,
      randomInt: randomInteger,
    },
    apiStatus: apiStatus,
  });
});

module.exports = router;
