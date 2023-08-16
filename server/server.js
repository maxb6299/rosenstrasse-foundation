require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const newsDatabase = require("./routes/newsDatabase");
app.use("/news", newsDatabase);

const testimonyDatabase = require("./routes/testimonyDatabase");
app.use("/testimonies", testimonyDatabase);

const teamMemberDatabase = require("./routes/teamMemberDatabase");
app.use("/team-members", teamMemberDatabase);

const authenticateRoute = require("./routes/authenticate");
app.use("/authenticate", authenticateRoute);

app.use((req, res) => {
  res.status(400).send("Bad Request");
});

const { getDatabase, connectToDatabase } = require("./database");
connectToDatabase((err) => {
  if (!err) {
    app.listen(PORT, () =>
      console.log(`Server started. Listening on port ${PORT}.`)
    );
    const database = getDatabase();
    app.set("database", database);
  } else {
    console.log(`Error starting server ${err}`);
  }
});
