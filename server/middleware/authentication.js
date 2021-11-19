const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // attach the user to the job routes
    const user = User.findById(payload.id).select("-password");
    req.user = user;

    req.user = { userId: payload.userId, username: payload.username };
    next();
  } catch (error) {
    throw new Error("Authorization Invalid");
  }
};

module.exports = auth;
