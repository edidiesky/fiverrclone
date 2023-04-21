import asyncHandler from "express-async-handler";
import About from "../models/About.js";
//PRIVATE
// All role
const GetAboutById = asyncHandler(async (req, res) => {
  const about = await About.findOne({ _id: req.params.id });
  if (!about) {
    res.status(404);
    throw new Error("ThE User About cannot be found");
    // Creating the about
  }
  res.status(200).json({ about });
});

//PRIVATE/About
const CreateAbout = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const userabout = await About.findOne({ userId });
  if (userabout) {
    res.status(404);
    throw new Error("ThE User About has aleady been created");
    // Creating the about
  }

  const data = {
    user: userId,
    ...req.body,
  };

  const about = await About.create({ ...data });
  res.status(200).json({ about });
});

//PRIVATE/About
const UpdateAbout = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  // find one of the about that belongs to the user
  const userabout = await About.findOne({ userId });
  // check if the above is true

  if (!userabout) {
    res.status(404);
    throw new Error("The user about does not exist");
  }
  const { language, from, skills, description, accounts, information } =
    req.body;

  const data = {
    user: userId,
    description,
    information,
    from,
  };

  // check for empty values and repeated values
  language &&
    !userabout.language.includes(language) &&
    userabout.language.push(language);

  skills && !userabout.skills.includes(skills) && userabout.skills.push(skills);

  accounts &&
    !userabout.accounts.includes(accounts) &&
    userabout.accounts.push(accounts);

  await userabout.save();

  const updatedAbout = await About.findByIdAndUpdate(
    { _id: req.params.id },
    { ...data },
    { new: true }
  );
  res.status(200).json({ updatedAbout });
});

//PRIVATE/ADMIN
const AdminUpdateAbout = asyncHandler(async (req, res) => {
  const { AboutId, Aboutname } = req.About;
  const userabout = await About.findById({ _id: req.params.id });
  if (!userabout) {
    res.status(404);
    throw new Error("The About does not exist");
  }
  const updatedAbout = await About.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedAbout });
});
//PRIVATE/ADMIN
const DeleteAbout = asyncHandler(async (req, res) => {
  const { AboutId, Aboutname } = req.About;
  const userabout = await About.findById({ _id: req.params.id });
  if (!userabout) {
    res.status(404);
    throw new Error("The About does not exist");
  }
  await About.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ msg: "The About has been successfully deleted" });
});

// PRIVATE/ADMIN
const GetAllAbout = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 3;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const totalAbout = await About.countDocuments({});

  const about = await About.find({}).skip(skip).limit(limit);

  const noOfPages = Math.ceil(totalAbout / limit);
  res.status(200).json({ about, noOfPages, totalAbout });
});

export {
  GetAboutById,
  GetAllAbout,
  UpdateAbout,
  DeleteAbout,
  AdminUpdateAbout,
  CreateAbout,
};
