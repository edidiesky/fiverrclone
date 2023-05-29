import mongoose from "mongoose";

// a structure of the user
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: [true, "PLease add an emailvalue"],
    },
    password: {
      type: String,
      required: [true, "PLease add a password value"],
    },
    country: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
    },
    level: {
      type: String,
      default:"level 1 seller",
      enum: ["level 1 seller", "level 2 seller", "level 3 seller"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
