import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { v4 as uuid4 } from "uuid";
import { google } from "googleapis";
//register user
// Not Private

// const credentials = new google.auth.OAuth2(
//   "623484949486-lo5ji8k1ucpe8hu69mpkn02atdh15rj8.apps.googleusercontent.com'",
//   "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",
//   "http://localhost:5173"
// );

// const credentials = {
//   client_id: '623484949486-lo5ji8k1ucpe8hu69mpkn02atdh15rj8.apps.googleusercontent.com',
//   client_secret: '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',
//   redirect_uris: ['http://localhost:5173'],
// };

// const oauth2Client = new google.auth.OAuth2(
//   credentials.client_id,
//   credentials.client_secret,
//   credentials.redirect_uris[0]
// );

// const authUrl = oauth2Client.generateAuthUrl({
//   access_type: "offline",
//   scope: ["https://mail.google.com/"],
// });

// console.log("Authorize this app by visiting this URL:", authUrl);

// const oauth2Client = new google.auth.OAuth2(
//   '623484949486-lo5ji8k1ucpe8hu69mpkn02atdh15rj8.apps.googleusercontent.com',
//   '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',
//   'http://localhost:5173'
// );

// const getAccessToken = async () => {
//   try {
//     const { token } = await oauth2Client.getAccessToken();
//     return token;
//   } catch (error) {
//     console.log('Error getting access token:', error);
//     throw error;
//   }
// };

// getAccessToken()
//   .then(token => console.log(token))
//   .catch(error => console.log('Error:', error));

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Set this to true for SSL/TLS
  auth: {
    username: "essienedidiong1000@gmail.com",
    password: "Mcgarvey1000",
    type: "PLAIN",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(success);
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, phone, country } = req.body;
  //
  if (!email || !password) {
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
    password: hashedpassword,
    ...req.body,
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

  const user = await User.findOne({ email })
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const verifyPassword = bcrypt.compare(password, user.password);
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
