const path = require("path");
const { readFile, writeFile, rename, access } = require("fs/promises");
const { unlink } = require("fs").promises;

exports.get_all_data = async (req, res, filePath) => {
  try {
    const data = await readFile(filePath, "utf8");
    res.setHeader("Content-Type", "application/json");

    res.status(200).send(data);
    console.log("JSON sent in GET request");
  } catch (error) {
    res.status(500).send();
    console.log("Error reading file for GET request", error);
  }
};

exports.update_all_data = async (req, res, filePath) => {
  try {
    const updatedData = JSON.stringify(req.body);

    await writeFile(filePath, updatedData, "utf8");
    res.status(200).send();
    console.log("JSON updated in POST request");
  } catch (error) {
    res.status(500).send();
    console.error("Error sending POST request", error);
  }
};

exports.get_image = async (req, res, filePath) => {
  try {
    const id = req.params.id;

    const data = await readFile(filePath, "utf8");
    const parsedData = JSON.parse(data);

    const item = parsedData.find((item) => item.id == id);

    if (item) {
      const absolutePath = path.resolve(item.imagePath);

      try {
        await access(absolutePath);
        res.status(200).sendFile(absolutePath);
        console.log("Image sent in GET request");
      } catch (error) {
        res.status(404).send();
        console.log("Image file not found for GET request");
      }
    } else {
      res.status(404).send();
      console.log("Item not found when searching for image for GET request");
    }
  } catch (error) {
    res.status(500).send();
    console.error("Error getting image for GET request", error);
  }
};

exports.update_image = async (req, res, filePath) => {
  try {
    const id = req.params.id;
    const image = req.file;

    if (!image) {
      throw new Error("Image is missing in POST request");
    }

    const data = await readFile(filePath, "utf8");
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
        res.status(500).send();
        console.error("Error inserting image in database", error);
      }
    } else {
      res.status(404).send();
      console.log("Item not found for image POST request");
    }
  } catch (error) {
    res.status(500).send();
    console.error("Error updating image in POST request", error);
  }
};

exports.append_item = async (req, res, filePath) => {
  try {
    const data = await readFile(filePath, "utf8");

    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch (error) {
      console.error(
        "Error parsing data for POST request for appending an item",
        error
      );
      res.status(500).send();
      return;
    }

    parsedData.push(req.body);
    const updatedData = JSON.stringify(parsedData);

    await writeFile(filePath, updatedData, "utf8");
    res.status(200).send();
    console.log("Object appended in POST request");
  } catch (error) {
    res.status(500).send();
    console.error("Error sending POST request appending an item", error);
  }
};

exports.delete_item = async (req, res, filePath) => {
  try {
    const id = req.params.id;

    const data = await readFile(filePath, "utf8");
    const parsedData = JSON.parse(data);

    const item = parsedData.find((item) => item.id == id);
    const itemIndex = parsedData.findIndex((item) => item.id == id);

    if (itemIndex != -1 && itemIndex < parsedData.length) {
      if (item.imagePath) {
        try {
          const absoluteImagePath = path.resolve(item.imagePath);
          await unlink(absoluteImagePath);
          console.log("Image sucessfully deleted");
        } catch (error) {
          console.error("Error deleting file", error);
        }
      }

      parsedData.splice(itemIndex, 1); // deletes item
      const updatedData = JSON.stringify(parsedData, null, 2);
      await writeFile(filePath, updatedData, "utf8");
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
};