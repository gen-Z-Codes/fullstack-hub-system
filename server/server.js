const express = require("express");
const connectDB = require('./config/db')

const app = express();
require("dotenv").config();

// Connect to the database
connectDB();

// PORT for server
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("THIS IS GENZ CODES");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
