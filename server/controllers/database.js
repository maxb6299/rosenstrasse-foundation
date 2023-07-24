const path = require("path");
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
    const imageCollection = collection + "Images";
    const id = req.params.id;

    const database = req.app.get("database");
    const userData = await database
      .collection(imageCollection)
      .findOne({ _id: id });

    if (userData && userData.image) {
      const imageData = userData.image;
      const imagePath = path.resolve("./temp/image.png");
      const imageBuffer = Buffer.from(imageData.buffer, "base64");

      fs.writeFileSync(imagePath, imageBuffer);

      res.status(200).sendFile(imagePath);
      console.log(`Successfully got photo from ${imageCollection}`);

      clearTempDirectory();
    } else {
      res.status(404).json({
        error: `Error getting image from collection ${imageCollection}`,
      });

      console.log("Image not found for GET request");
    }
  } catch (error) {
    res.status(500).json({
      error: `Error getting photo from collection ${imageCollection}`,
    });
    console.log(`Error getting photo from ${imageCollection}:`, error);
  }
};

exports.update_image = async (req, res, collection) => {
  try {
    const imageCollection = collection + "Images";
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
      .collection(imageCollection)
      .updateOne({ _id: id }, { $set: { image: imageData } }, { upsert: true });

    fs.unlinkSync(imagePath);

    res
      .status(200)
      .json({ message: `Successfully updated photo from ${imageCollection}` });
    console.log(`Successfully updated photo from ${imageCollection}`);

    clearTempDirectory();
  } catch (error) {
    res.status(500).json({
      error: `Error updating photo from collection ${imageCollection}`,
    });
    console.log(`Error updating photo from ${imageCollection}:`, error);
  }
};

exports.append_item = async (req, res, collection) => {
  try {
    const id = req.params.id;
    const data = req.body.data;

    const database = req.app.get("database");
    await database
      .collection(collection)
      .updateOne({ _id: id }, { $set: { data: data } }, { upsert: true });

    res
      .status(200)
      .json({ message: `Successfully appended item in ${collection}` });
    console.log(`Successfully appended item in ${collection}`);

    clearTempDirectory();
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error appending item in collection ${collection}` });
    console.log(`Error appending item in ${collection}:`, error);
  }
};

exports.delete_item = async (req, res, collection) => {
  try {
    const id = req.params.id;
    const database = req.app.get("database");

    const imageCollection = collection + "Images";
    try {
      await database.collection(imageCollection).deleteOne({ _id: id });
      console.log(`Successfully deleted image from ${imageCollection}`);
    } catch (error) {
      console.log(
        `Error deleting image for user ${id} from ${imageCollection}:`,
        error
      );
    }

    try {
      await database.collection(collection).deleteOne({ _id: id });
      console.log(`Successfully deleted user from ${collection}`);
    } catch (error) {
      console.log(`Error deleting user ${id} from ${collection}:`, error);
      throw error;
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({
      error: `Error deleting user from collection ${collection}`,
    });
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
