// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Cart from "../models/Cart.js";
import Gig from "../models/Gig.js";
// GET All Cart
//  Public
const GetAllBuyerCart = asyncHandler(async (req, res) => {
  // instantiate the request queries
  const queryObject = { buyer: req.user.userId };

  let result = Cart.find(queryObject)
    .populate("sellerId", "image username")
    .populate(
      "gigId",
      "image title category shortDescription price type deliveryDays"
    );

  const totalCart = await Cart.countDocuments({});

  const cart = await result;
  res.status(200).json({ cart, totalCart });
});

// GET SINGLE Gig
// Not Private
const GetSingleBuyerCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const cart = await Cart.findOne({ _id: id })
    .populate(
      "gigId",
      "image title image shortDescription price category subInfo type deliveryDays"
    )
    .populate("buyer", "username name image country");

  if (!cart) {
    res.status(404);
    throw new Error("Cart Item not found");
  }
  res.status(200).json({ cart });
});

//PRIVATE
// ADMIN
const UpdateBuyerCart = asyncHandler(async (req, res) => {
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
  const gig = await Cart.findById({ _id: req.params.id });

  if (!gig) {
    res.status(404);
    throw new Error("Cart not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  // check if the user is the seller or is admin
  if (gig.user.toString() === userId || role === "admin") {
    const data = {
      user: userId,
      title,
      tags,
      image,
      type,
      description,
      price,
      countInStock,
      shortDescription,
      deliveryDays,
      category,
      subInfo,
    };
    // check for empty values and repeated values

    const updatedGig = await Cart.findByIdAndUpdate(
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

// GET SINGLE Cart
// Private
// Admin and seller
const CreateBuyerCart = asyncHandler(async (req, res) => {
  // get the request body parameters
  const { qty } = req.body;

  // console.log(qty);
  const { id } = req.params;
  const gig = await Gig.findById({ _id: id });
  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  const { userId } = req.user;

  // check if the gig is alrady in the cart
  const alreadyinCart = await Cart.findOne({
    gigId: id,
    buyer: userId,
  });
  // if in cart update it
  if (alreadyinCart) {
    let cart = await Cart.findOneAndUpdate(
      {
        gigId: id,
        buyer: userId,
      },
      {gigQuantity: qty },
      { new: true }
    );
    res.status(200).json({ cart });
  } else {
    // "countInStock": 10,
    // checking if the required quantity is greater that the gig countInStock
    if (qty > gig.countInStock) {
      res.status(404);
      throw new Error(
        "The gig / service is not available for that quantity count"
      );
    }
    // console.log(qty);
    // console.log(gig.countInStock);
    // trying to update the sellers's Gig count in stock
    await Gig.findByIdAndUpdate(
      { _id: id },
      { countInStock: parseInt(gig.countInStock - qty) },
      { new: true }
    );

    // console.log('hello');
    // console.log(gig.countInStock - qty);

    const cart = await Cart.create({
      gigQuantity: qty,
      buyer: userId,
      gigId: id,
      sellerId: gig.sellerId ? gig.sellerId : gig.user,
    });

    res.status(200).json({ cart });
  }
});

//PRIVATE/
// ADMIN
const DeleteBuyerCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.user;
  const gig = await Cart.findById({ _id: id });

  if (!gig) {
    res.status(404);
    throw new Error("Cart not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  console.log(gig.user.toString() !== userId);
  // check if the user is the seller or is admin
  if (gig.user.toString() === userId || role === "admin") {
    await Cart.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The Cart has been successfully deleted" });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

const GetTopRatedBuyerCart = asyncHandler(async (req, res) => {
  // get the Cart but based on the rating and then send 4 Cart
  const toprated = await Cart.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json({ toprated });
});

export {
  GetTopRatedBuyerCart,
  CreateBuyerCart,
  DeleteBuyerCart,
  UpdateBuyerCart,
  GetAllBuyerCart,
  GetSingleBuyerCart,
};
