const databaseController = require("../controllers/database.js");

const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "/tmp" });
const router = express.Router();

const COLLECTION = "teamMembers";

router.get("/", (req, res) => {
  databaseController.get_all_data(req, res, COLLECTION);
});

router.post("/", (req, res) => {
  databaseController.update_all_data(req, res, COLLECTION);
});

router.get("/:id/image", (req, res) => {
  databaseController.get_image(req, res, COLLECTION);
});

router.post("/:id", (req, res) => {
  databaseController.append_item(req, res, COLLECTION);
});

router.post("/:id/image", upload.single("image"), (req, res) => {
  databaseController.update_image(req, res, COLLECTION);
});

router.delete("/:id", (req, res) => {
  databaseController.delete_item(req, res, COLLECTION);
});

module.exports = router;
