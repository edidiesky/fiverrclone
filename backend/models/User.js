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
    googleId: {
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
    verified: {
      type: Boolean,
      default: false,
    },

    about: {
      from: { type: String },
      language: { type: Array, default: [] },
      description: { type: String },
      skills: { type: Array, default: [] },
      information: { type: String },
      occupation: { type: String },
    },
    country: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    level: {
      type: String,
      default: "level 1",
      enum: ["level 1", "level 2", "level 3"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
