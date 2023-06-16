import asyncHandler from "express-async-handler";
import User from "../models/User.js";
//PRIVATE/ADMIN
const GetUserById = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.status(200).json({ user });
});

// Private
// single user
//PRIVATE/ADMIN
const GetUsersProfile = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.status(200).json({ user });
});

//PRIVATE/USER
const UpdateUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const Loginuser = await User.findById({ _id: req.params.id });
  if (!Loginuser) {
    res.status(404);
    throw new Error("The user does not exist");
  }

  const { from, language, description, skills, accounts, information } =
    req.body;

  Loginuser.about.push({
    from,
    language,
    description,
    skills,
    accounts,
    information,
  });
  await Loginuser.save();
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedUser });
});

//PRIVATE/ADMIN
const AdminUpdateUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const Loginuser = await User.findById({ _id: req.params.id });
  if (!Loginuser) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedUser });
});
//PRIVATE/ADMIN
const DeleteUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const Loginuser = await User.findById({ _id: req.params.id });
  if (!Loginuser) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  await User.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The user has been successfully deleted" });
});

// PRIVATE/ADMIN
const GetAllUser = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 5;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const totalUser = await User.countDocuments({});

  const user = await User.find({}).skip(skip).limit(limit);

  const noOfPages = Math.ceil(totalUser / limit);
  res.status(200).json({ user, noOfPages, totalUser });
});

export {
  GetUserById,
  GetAllUser,
  UpdateUser,
  DeleteUser,
  AdminUpdateUser,
  GetUsersProfile,
};
