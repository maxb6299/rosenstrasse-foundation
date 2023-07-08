const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
});
