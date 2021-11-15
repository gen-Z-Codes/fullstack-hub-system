const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const signup = async (req, res) => {
  const newUser = await User.create({ ...req.body });
  const token = newUser.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { username: newUser.username }, token });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  // make sure [username/email] and password are provided
  if (!username || !password) {
    throw Error("Please provide username or password");
  }
  const user = await User.findOne({ username });

  // make sure user is found
  if (!user) {
    throw Error(
      "UnAuthenticated Error: User not found. Invalid Credentials provided."
    );
  }
  // if user if found, make sure password provided, is a match
  const isActualPassword = await user.comparePassword(password);
  if (!isActualPassword) {
    throw Error("UnAuthenticated Error: Invalid credentials Provided");
  }

  // if password is a match, generate token and send response
  const token = user.createJWT();
  const firstName = user.fullName.split(" ")[0];
  res.status(StatusCodes.OK).json({
    user: { username: user.username, name: firstName },
    token,
  });
};

module.exports = { signup, login };
