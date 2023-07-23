const { MongoClient } = require("mongodb");

let databaseConnection;

module.exports = {
  connectToDatabase: async (callback) => {
    try {
      let client = await MongoClient.connect(process.env.DATABASE_URI);
      databaseConnection = client.db();
      console.log("Connected to database");
      return callback();
    } catch (err) {
      console.error(err);
      return callback(err);
    }
  },
  getDatabase: () => databaseConnection,
};
