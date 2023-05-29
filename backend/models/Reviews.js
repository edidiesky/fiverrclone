import mongoose from "mongoose";

// a structure of the review
const ReviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    gig: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Gig'
    },
    reviewuser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    rating: { type: Number, required: true },
    numreview: { type: Number },
    likes: [],
    sellerResponse: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
