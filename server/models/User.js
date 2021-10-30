const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your full name"],
    maxlength: 50,
  },
  //   User cannot create a new account a new account with the same email.
  email: {
    type: String,
    required: [true, "Please provide your email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please provide a unique username"],
    unique: true,
    minlength: 6,
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
    minlength: 10,
  },
});

// Hash password for security
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

// compare passwords on login, to ensure match
userSchema.methods.comparePassword(candidatePassword) = async function() {
    const isMatch = bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

// Create json web token for user authentication
userSchema.methods.createJWT = function() {
    return jwt.sign({userId: this._id, username: this.username}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

const User = mongoose.model('User', userSchema)

module.exports = User