import asyncHandler from "express-async-handler";
import Chat from "../models/Chat.js";

// Create Chat
//  Public
const createChat = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;
  const chat = await Chat.create({
    id: role === "seller" ? userId + req.body.to : req.body.to + userId,
    sellerId: role === "seller" ? userId : req.body.to,
    buyerrId: role === "seller" ? req.body.to : userId,
    readBySeller: role === "seller",
    readByBuyer: role !== "seller",
  });

  res.status(200).json({ chat });
});

// GET Review of the user gig
//  Public
// send the gig id only
const getSingleChat = asyncHandler(async (req, res) => {
  const { role, userId } = req.user;
  // get the role

  const chat = await Chat.findById(
    role === "user" ? { sellerId: userId } : { buyerId: userId }
  );
  res.status(200).json({ chat });
});

// GET All Gig
//  Public
// send the gig id only
const getAllChat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const Chat = await Chat.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!Chat) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ Chat });
});

// Like Gig
//  Public
// send the gig id only
const LikeChat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const Chat = await Chat.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!Chat) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ Chat });
});

// GET All Gig
//  Public
const DeleteChat = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "delete review controller" });
});

const UpdateChat = asyncHandler(async (req, res) => {
  // updating the chat
  const updatedChat = await Chat.findByIdAndUpdate(
    { id: req.params.id },
    {
      ...(req.role === "seller"
        ? { readBySeller: true }
        : { readByBuyer: false }),
    },
    { new: true }
  );
  res.status(200).json({ updatedChat });
});

export { createChat, getSingleChat, DeleteChat, getAllChat, UpdateChat };
