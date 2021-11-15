const express = require("express");
const connectDB = require("./config/db");
// const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

const userRoute = require("./routes/userRoutes");
const customerRoute = require("./routes/customerRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("THIS IS GENZ CODES");
});

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/customers", customerRoute);

// PORT for server
const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // Connect to the database
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
