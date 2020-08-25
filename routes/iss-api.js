const express = require("express");
const fetch = require("node-fetch");
const isOnline = require("is-online");
const router = express.Router();

router.get("/", async (req, res) => {
  var apiStatus;

  (async () => {
    if (await isOnline()) {
      apiStatus = "Online";
    } else {
      apiStatus = "Offline";
    }
  })();

  const url = "http://api.open-notify.org/iss-now.json";

  const options = {
    method: "GET",
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => console.log(e));
  res.json({
    details: response,
    apiStatus: apiStatus,
  });
});

module.exports = router;
