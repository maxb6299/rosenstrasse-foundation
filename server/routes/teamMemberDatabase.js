const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the team memeber database");
});

module.exports = router;
