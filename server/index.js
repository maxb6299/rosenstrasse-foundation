const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const testimonyDatabase = require("./routes/testimonyDatabase");
app.use("/testimonies", testimonyDatabase);

const teamMemberDatabase = require("./routes/teamMemberDatabase");
app.use("/team-members", teamMemberDatabase);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
});
