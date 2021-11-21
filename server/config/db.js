const mongoose = require("mongoose");
require("dotenv").config(); // Load .env file

const uri = process.env.MONGO_URI;

const connectDB = () => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
