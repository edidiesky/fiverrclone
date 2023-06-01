import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    gigId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Gigs",
    },
    gigQuantity: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
