import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Gig from "../models/Gig.js";
// GET All Gig
//  Public
const GetAllGig = asyncHandler(async (req, res) => {
  // instantiate the request queries
  // min and max price
  // search and userId
  // category
  const search = req.query.search;
  const minprice = req.query.minprice;
  const category = req.query.category;
  const maxprice = req.query.maxprice;
  const user = req.query.user;
  const sort = req.query.sort;

  const queryObject = {};

  // search
  if (search) {
    queryObject.title = { $regex: search, options: 'i' }
  }
  // minimum price
  if (minprice) {
    queryObject.price = { $gt: minprice }
  }
  // maxprice
  if (maxprice) {
    queryObject.price = { $gt: maxprice }
  }
  // user
  if (user) {
    queryObject.user = user
  }
  // category
  if (category) {
    queryObject.category = category
  }

  const limit = req.query.limit || 12
  const page = req.query.page
  const skip = (page - 1) * limit;

  let result = Gig.find(queryObject).skip(skip).limit(limit);

  // perform sorting operation
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }

  // console.log(queryObject)




  const totalGig = await Gig.countDocuments({})
  const noOfPages = Math.ceil(totalGig / limit);

  const gig = await result
  res.status(200).json({ gig, totalGig, noOfPages });
});
//
// GET SINGLE Gig
// Not Private
const GetSingleGig = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const gig = await Gig.findById({ _id: id }).populate("user", "username name image country role level");
  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  res.status(200).json({ gig });
});

// GET SINGLE Gig
// Not Private
// Admin and seller
const CreateSingleGig = asyncHandler(async (req, res) => {
  // get the request body parameters
  const {
    title,
    image,
    category,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    subInfo,
    type,
    deliveryDays,
  } = req.body;
  const { userId, role } = req.user;

  if (role === "user") {
    res.status(404);
    throw new Error("User cannot perform this action");
  }

  const gig = await Gig.create({
    title,
    image,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    type,
    deliveryDays,
    user: userId,
  });

  if (gig) {
    category && !gig.category.includes(category) && gig.category.push(category);

    subInfo && !gig.subInfo.includes(subInfo) && gig.subInfo.push(subInfo);
  }
  res.status(200).json({ gig });
});

//PRIVATE
// ADMIN
const UpdateGig = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;
  const {
    title,
    image,
    category,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    subInfo,
    type,
    deliveryDays,
  } = req.body;
  const gig = await Gig.findById({ _id: req.params.id });

  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  // check if the user is the seller or is admin
  if (gig.user.toString() === userId || role === "admin") {
    const data = {
      user: userId,
      title,
      image,
      description,
      price,
      countInStock,
      shortDescription,
      deliveryDays,
    };
    // check for empty values and repeated values
    subInfo && !gig.subInfo.includes(subInfo) && gig.subInfo.push(subInfo);
    tags && !gig.tags.includes(tags) && gig.tags.push(tags);
    category && !gig.category.includes(category) && gig.category.push(category);
    await gig.save();

    const updatedGig = await Gig.findByIdAndUpdate(
      { _id: req.params.id },
      { ...data },
      { new: true }
    );
    res.status(200).json({ updatedGig });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

//PRIVATE/
// ADMIN
const DeleteGig = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.user;
  const gig = await Gig.findById({ _id: id });

  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  console.log(gig.user.toString() !== userId);
  // check if the user is the seller or is admin
  if (gig.user.toString() === userId || role === "admin") {
    await Gig.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The Gig has been successfully deleted" });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

// //Public/
// // user and admin
// const ReviewGig = asyncHandler(async (req, res) => {
//   // instantiate the request parameters
//   const { userId, isAdmin, firstname, lastname } = req.user;
//   const { userrating, comment } = req.body;
//   const { id } = req.params;
//   // Find the Gig
//   const Gig = await Gig.findById({ _id: id });
//   if (!Gig) {
//     res.status(404);
//     throw new Error("Gig not found");
//   }
//   // Check if the user has already reviewed the Gig
//   const alreadyReviewed = Gig.reviews.find(
//     (x) => x.user.toString() === userId.toString()
//   );
//   if (alreadyReviewed) {
//     res.status(404);
//     throw new Error("Gig has already been reviewed by you");
//   } else {
//     // if not, add a review
//     const reviewData = {
//       userrating: userrating,
//       comment,
//       firstname,
//       lastname,
//       user: userId,
//     };
//     // push the required data into the review array
//     Gig.reviews.push(reviewData);
//     // // get the number of reviews from the length, and get the ratings from ratio of
//     Gig.numReviews = Gig.reviews.length;
//     const TotalRating = Gig.reviews.reduce(
//       (acc, item) => item.userrating + acc,
//       0
//     );
//     // // Total rating
//     Gig.rating = Math.ceil(TotalRating / Gig.reviews.length);
//     // // saving the doc
//     await Gig.save();
//     res
//       .status(200)
//       .json({ message: "The Gig has been successfully reviewed" });
//   }
// });

const GetTopRatedGig = asyncHandler(async (req, res) => {
  // get the Gig but based on the rating and then send 4 Gig
  const toprated = await Gig.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json({ toprated });
});

export {
  GetSingleGig,
  GetAllGig,
  UpdateGig,
  DeleteGig,
  GetTopRatedGig,
  CreateSingleGig,
};
