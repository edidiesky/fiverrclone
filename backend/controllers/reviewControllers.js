import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Gig from "../models/Gig.js";
import Reviews from "../models/Reviews.js";

// Create reviews
//  Public
const createReviews = asyncHandler(async (req, res) => {
  const { userId, role, name, username } = req.user;

  // send an error to prevent the user from reviewing twice
  // get the body parameter
  const { description, rating } = req.body;
  if (!description || !rating) {
    res.status(404);
    throw new Error("The review form should be completely filled");
  }

  // get the gig for reviews
  const gig = await Gig.findById({ _id: req.params.id });
  // // locate the gig
  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }

  // check for permissions (admin and users)
  if (role === "user" || role === "admin") {
    const data = {
      sellerId: gig.sellerId,
      description,
      rating,
      gig: gig._id,
      reviewuser: userId,
    };

    // check if the user has alraedy review the gig
    const reviewed = await Reviews.findOne({
      gig: gig._id,
      reviewuser: userId,
    });
    // send an error
    if (reviewed) {
      res.status(404);
      throw new Error("You can't review this gig/service twice");
    }
    // destructure the data and then create it
    const review = await Reviews.create({ ...data });

    res.status(200).json({ review });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

// GET Review of the user gig
//  Public
// send the gig id only
const getSellerReviews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // category
  const search = req.query.search;
  const sort = req.query.sort;
  const queryObject = { gig: id };
  let result = Reviews.find(queryObject);
  // search
  if (search) {
    queryObject.title = { $regex: search, options: "i" };
  }

  // find the Gig
  const reviews = await result
    .populate("reviewuser", "country email username image")
    .populate("sellerId", "username");
  if (!reviews) {
    res.status(404);
    throw new Error("Gig not found");
  }
  // get the review length
  // get the total rating

  res.status(200).json({ reviews });
});

// GET All Gig
//  Public
// send the gig id only
const getAllReviews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const reviews = await Reviews.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!reviews) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ reviews });
});

// Like Gig
//  Public
// send the gig id only
const LikeReviews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const reviews = await Reviews.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!reviews) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ reviews });
});

// GET All Gig
//  Public
const DeleteReviews = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "delete review controller" });
});

export { createReviews, getSellerReviews, DeleteReviews, getAllReviews };
