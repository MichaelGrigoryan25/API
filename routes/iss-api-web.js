const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("issAPIWeb"); // views/issAPIWeb.ejs
})

module.exports = router;
