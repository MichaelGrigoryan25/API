const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/", async (req, res) => {
  const url = "http://api.open-notify.org/iss-now.json";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => console.log(e));
  console.log(response);
  res.json(response);
});

// function issFetch() {
//   fetch("http://api.open-notify.org/iss-now.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// }

module.exports = router;
