const express = require("express");
const app = express();
app.listen(4000, () => {
  console.log("server is up: ", 4000);
});

app.get("/status", (req, res) => {
  const Thought = require("./src/models/thoughts");
  res.sendStatus(200);
});
require("dotenv").config();
const connection = require("./src/config/postgres-connection");
