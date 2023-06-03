import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

//register user
// Not Private
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, phone, country } = req.body;
  //
  if (!username || !email || !password) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    username,
    password: hashedpassword,
    ...req.body
  };
  const user = await User.create(Tempuser);
  //
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
      username: user.username,
    },
    process.env.JWT_CODE,
    { expiresIn: "2d" }
  );

  res.status(200).json({ user, token });
});

//Login the  user
// Not Private
const LoginUser = asyncHandler(async (req, res) => {
  // check if the email has been provided
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // Find the user in the database

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    res.status(404);
    throw new Error("Please provide a valid password");
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
      username: user.username,
      name: user.name,
    },
    process.env.JWT_CODE,
    { expiresIn: "2d" }
  );

  res.status(200).json({ user, token });
});

export { registerUser, LoginUser };
