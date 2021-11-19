const express = require("express");
const userRoute = express.Router();

const { signup, login } = require("../controllers/auth");

userRoute.route("/register").post(signup);
userRoute.route("/login").post(login);

module.exports = userRoute;
