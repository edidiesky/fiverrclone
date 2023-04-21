import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "PLease add a Cart name"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: Array,
      required: [true, "PLease add the image for the Cart"],
    },
    description: {},
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    package: [],
    tags: [],
    types: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      default: "Basic",
    },
    shortDesc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
