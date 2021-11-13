const express = require("express");
const connectDB = require("./config/db");

const app = express();
require("dotenv").config();

const userRoute = require("./routes/userRoutes");
const customerRoute = require("./routes/customerRoutes");

// Connect to the database
connectDB();

// PORT for server
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("THIS IS GENZ CODES");
});

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/customers", customerRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
