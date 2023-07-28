const authenticate = require("../controllers/authenticate.js");

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
    const authHeader = req.headers.authorization;
    const credential = authHeader.split(" ")[1];
    await authenticateCredential(credential);

    const dataArray = req.body;
    const database = req.app.get("database");

    dataArray.forEach(async (item) => {
      const filter = { _id: item._id };
      const update = { $set: item };
      await database.collection(collection).updateOne(filter, update);
    });

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
  const imageCollection = collection + "Images";
  try {
    const id = req.params.id;

    const database = req.app.get("database");
    const image = await database
      .collection(imageCollection)
      .findOne({ _id: id });

    if (image && image.image) {
      const imageData = image.image;
      const imagePath = path.resolve(`/tmp/${id}.png`);
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
  const imageCollection = collection + "Images";
  try {
    const authHeader = req.headers.authorization;
    const credential = authHeader.split(" ")[1];
    await authenticateCredential(credential);

    const id = req.params.id;
    const image = req.file;
    if (!image) {
      throw new Error("Image is missing in POST request");
    }

    const imageData = fs.readFileSync(image.path);

    const imagePath = path.resolve(`/tmp/${id}.png`);
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
    const authHeader = req.headers.authorization;
    const credential = authHeader.split(" ")[1];
    await authenticateCredential(credential);

    const id = req.params.id;
    const data = req.body;

    const database = req.app.get("database");
    await database
      .collection(collection)
      .updateOne({ _id: id }, { $set: { _id: id, ...data } }, { upsert: true });

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
    const authHeader = req.headers.authorization;
    const credential = authHeader.split(" ")[1];
    await authenticateCredential(credential);

    const id = req.params.id;
    const database = req.app.get("database");

    await deleteImage(id, collection, database);

    try {
      await database.collection(collection).deleteOne({ _id: id });
      console.log(`Successfully deleted item from ${collection}`);
    } catch (error) {
      console.log(`Error deleting item ${id} from ${collection}:`, error);
      throw error;
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({
      error: `Error deleting item from collection ${collection}`,
    });
  }
};

exports.delete_image = async (req, res, collection) => {
  const imageCollection = collection + "Images";
  try {
    const authHeader = req.headers.authorization;
    const credential = authHeader.split(" ")[1];
    await authenticateCredential(credential);

    const id = req.params.id;
    const database = req.app.get("database");

    const errorResponse = await deleteImage(id, imageCollection, database);
    if (errorResponse) throw new Error(errorResponse);

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({
      error: `Error deleting image from collection ${imageCollection}`,
    });
  }
};

async function deleteImage(id, collection, database) {
  try {
    await database.collection(collection).deleteOne({ _id: id });
    console.log(`Successfully deleted image from ${collection}`);
  } catch (error) {
    console.log(
      `Error deleting image for item ${id} from ${collection}:`,
      error
    );
    return error;
  }
}

function clearTempDirectory() {
  const directoryPath = "/tmp/";
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = `${directoryPath}${file}`;

      fs.unlink(filePath, (err) => {
        if (err) {
          // console.log(`Error deleting file ${filePath}:`, err);
          return;
        }
      });
    });
  });
}

async function authenticateCredential(credential) {
  try {
    await authenticate.verify_credentials(credential);
  } catch (error) {
    throw new Error("Not authenticated");
  }
}
