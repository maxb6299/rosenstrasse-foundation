const express = require("express");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "./database/team-members/images" });
const { readFile, writeFile, rename } = require("fs/promises");
const { unlink } = require("fs").promises;
const router = express.Router();

const FILE_PATH = "./database/team-members/team-members.json";

router.get("/", async (req, res) => {
  try {
    const data = await readFile(FILE_PATH, "utf8");
    res.setHeader("Content-Type", "application/json");

    res.send(data);
    res.status(200).send();
    console.log("JSON sent in GET request");
  } catch (error) {
    res.status(500).send();
    console.log("Error reading file for GET request", error);
  }
});

router.get("/:id/image", async (req, res) => {
  try {
    const id = req.params.id;

    const data = await readFile(FILE_PATH, "utf8");
    const parsedData = JSON.parse(data);

    const item = parsedData.find((item) => item.id == id);

    if (item) {
      absolutePath = path.resolve(item.imagePath);
      res.sendFile(absolutePath);
      res.status(200).send();
      console.log("Image sent in GET request");
    } else {
      res.status(404).send();
      console.log("Item not found when searching for image for GET request");
    }
  } catch (error) {
    res.status(500).send();
    console.error("Error getting image for GET request", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const updatedData = JSON.stringify(req.body);

    await writeFile(FILE_PATH, updatedData, "utf8");
    res.status(200).send();
    console.log("JSON updated in POST request");
  } catch (error) {
    res.status(500).send();
    console.error("Error sending POST request", error);
  }
});

router.post("/appendItem", async (req, res) => {
  try {
    const data = await readFile(FILE_PATH, "utf8");

    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch (error) {
      console.error(
        "Error parsing data for POST request for specific id",
        error
      );
      res.status(500).send();
      return;
    }

    parsedData.push(req.body);
    const updatedData = JSON.stringify(parsedData);

    await writeFile(FILE_PATH, updatedData, "utf8");
    res.status(200).send();
    console.log("Object appended in POST request");
  } catch (error) {
    res.status(500).send();
    console.error("Error sending POST request for specific id", error);
  }
});

router.post("/:id/image", upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;

    const image = req.file;

    if (!image) {
      throw new Error("Image is missing in POST request");
    }

    const data = await readFile(FILE_PATH, "utf8");
    const parsedData = JSON.parse(data);

    const item = parsedData.find((item) => item.id == id);
    const itemIndex = parsedData.findIndex((item) => item.id == id);

    if (itemIndex != -1) {
      try {
        const absoluteImagePath = path.resolve(item.imagePath);

        await rename(image.path, absoluteImagePath);
        res.status(200).send();
        console.log("Image sucessfully sent in POST request");
      } catch (error) {
        console.error("Error inserting image in database", error);
      }
    } else {
      res.status(404).send();
      console.log("Item not found for image POST request");
    }
  } catch (error) {
    res.status(500).send();
    console.error("Error sending image in POST request", error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const data = await readFile(FILE_PATH, "utf8");
    const parsedData = JSON.parse(data);

    const item = parsedData.find((item) => item.id == id);
    const itemIndex = parsedData.findIndex((item) => item.id == id);

    if (itemIndex != -1) {
      try {
        const absoluteImagePath = path.resolve(item.imagePath);
        await unlink(absoluteImagePath);
        console.log("Image sucessfully deleted");
      } catch (error) {
        console.error("Error deleting file", error);
      }

      parsedData.splice(itemIndex, 1); // deletes item
      const updatedData = JSON.stringify(parsedData, null, 2);
      await writeFile(FILE_PATH, updatedData, "utf8");
      res.status(200).send();
      console.log("Item sucessfully deleted");
    } else {
      res.status(404).send();
      console.log("Item not found for DELETE request");
    }
  } catch (error) {
    res.status(500).send();
    console.log("Error reading file for DELETE request", error);
  }
});

module.exports = router;
