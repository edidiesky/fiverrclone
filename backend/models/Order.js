import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Cart",
    },
    cart_items: [
      {
        title: { type: String },
        price: { type: Number },
        image: { type: Array },
      },
    ],
    estimatedTax: {
      type: Number,
      required: true,
      default: 0.0,
    },
    TotalShoppingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Not Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
