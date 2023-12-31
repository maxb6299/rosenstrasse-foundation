const authenticate = require("../controllers/authenticate.js");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const authHeader = req.headers.authorization;
  const credential = authHeader.split(" ")[1];

  let userData;

  try {
    userData = await authenticate.verify_credentials(credential);
    console.log(`User ${userData.sub} sucessfully verified`);
    res.status(200).send("true");
  } catch (error) {
    console.error("Error authenticating", error.message);
    res.status(500).send("false");
  }
});

module.exports = router;
