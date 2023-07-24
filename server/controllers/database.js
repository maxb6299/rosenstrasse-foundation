const path = require("path");
const { readFile, writeFile, rename, access } = require("fs/promises");
const { unlink } = require("fs").promises;
const fs = require("fs");

exports.get_all_data = async (req, res, collection) => {
  try {
    const database = req.app.get("database");
    const allData = await database.collection(collection).find().toArray();

    res.status(200).json(allData);
    console.log(`Successfully got all data from ${collection}`);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error getting all data from collection ${collection}` });
    console.log(`Error getting all data from ${collection}:`, error);
  }
};

exports.update_all_data = async (req, res, collection) => {
  try {
    const updatedData = req.body;

    const database = req.app.get("database");
    await database.collection(collection).updateMany({}, { $set: updatedData });

    res
      .status(200)
      .json({ message: `Successfully updated all data from ${collection}` });
    console.log(`Successfully updated all data from ${collection}`);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error updating all data from collection ${collection}` });
    console.log(`Error updating all data from ${collection}:`, error);
  }
};

exports.get_image = async (req, res, collection) => {
  try {
    const id = req.params.id;

    const database = req.app.get("database");
    const userData = await database.collection(collection).findOne({ _id: id });

    if (userData && userData.image) {
      const imageData = userData.image;
      const imagePath = path.resolve("./temp/image.png");
      const imageBuffer = Buffer.from(imageData.buffer, "base64");

      fs.writeFileSync(imagePath, imageBuffer);

      res.status(200).sendFile(imagePath);
      console.log(`Successfully got photo from ${collection}`);

      clearTempDirectory();
    } else {
      res.status(404).json({
        error: `Error getting image from collection ${collection}`,
      });

      console.log("Image not found for GET request");
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error getting photo from collection ${collection}` });
    console.log(`Error getting photo from ${collection}:`, error);
  }
};

exports.update_image = async (req, res, collection) => {
  try {
    const id = req.params.id;
    const image = req.file;
    if (!image) {
      throw new Error("Image is missing in POST request");
    }

    const imageData = fs.readFileSync(image.path);

    const imagePath = path.resolve("./temp/image.png");
    fs.writeFileSync(imagePath, imageData);

    const database = req.app.get("database");
    await database
      .collection(collection)
      .updateOne({ _id: id }, { $set: { image: imageData } }, { upsert: true });

    fs.unlinkSync(imagePath);

    res
      .status(200)
      .json({ message: `Successfully updated photo from ${collection}` });
    console.log(`Successfully updated photo from ${collection}`);

    clearTempDirectory();
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error updating photo from collection ${collection}` });
    console.log(`Error updating photo from ${collection}:`, error);
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

function clearTempDirectory() {
  const directoryPath = "./temp/";
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = `${directoryPath}/${file}`;

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(`Error deleting file ${filePath}:`, err);
          return;
        }
      });
    });
  });
}
