const databaseController = require("../controllers/database.js");

const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./database/team-members/images" });
const router = express.Router();

const FILE_PATH = "./database/team-members/data.json";

router.get("/", (req, res) => {
  databaseController.get_all_data(req, res, FILE_PATH);
});

router.post("/", (req, res) => {
  databaseController.update_all_data(req, res, FILE_PATH);
});

router.get("/:id/image", (req, res) => {
  databaseController.get_image(req, res, FILE_PATH);
});

router.post("/appendItem", (req, res) => {
  databaseController.append_item(req, res, FILE_PATH);
});

router.post("/:id/image", upload.single("image"), (req, res) => {
  databaseController.update_image(req, res, FILE_PATH);
});

router.delete("/:id", (req, res) => {
  databaseController.delete_item(req, res, FILE_PATH);
});

module.exports = router;
