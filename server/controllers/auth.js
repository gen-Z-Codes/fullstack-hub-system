const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const signup = async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if (!fullName || !email || !username || !password) {
    throw new Error("Please provide the required credentials to signup");
  }
  try {
    const newUser = await User.create({ ...req.body });
    const token = User.createJWT();
    const firstName = newUser.fullName.split(" ")[0];
    res
      .status(StatusCodes.CREATED)
      .json({ user: { username: newUser.username, name: firstName } }, token);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: error });
  }
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
    throw Error("User not found. Invalid Credentials provided.");
  }
  // if user if found, make sure password provided, is a match
  const isActualPassword = user.comparePassword(password);
  if (!isActualPassword) {
    throw Error("Invalid credentials Provided");
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
