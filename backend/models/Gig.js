import mongoose from "mongoose";

const GigSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: Array,
      // required: [true, 'PLease add the image value for the Gig']
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    subInfo: [],
    category: [],
    type: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      default: "Basic",
    },
    deliveryDays: {
      type: Number,
      default: 1,
    },
    numreview: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("Gigs", GigSchema);
