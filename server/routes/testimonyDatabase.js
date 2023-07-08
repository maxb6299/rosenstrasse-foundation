const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("this is the testimony database");
});

module.exports = router;
