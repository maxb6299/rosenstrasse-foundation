const databaseController = require("../controllers/database.js");

const express = require("express");
const router = express.Router();

const COLLECTION = "news";

router.get("/", (req, res) => {
  databaseController.get_all_data(req, res, COLLECTION);
});

router.post("/:id", (req, res) => {
  databaseController.append_item(req, res, COLLECTION);
});

router.delete("/:id", (req, res) => {
  databaseController.delete_item(req, res, COLLECTION);
});

module.exports = router;
