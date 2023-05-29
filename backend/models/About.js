import mongoose from "mongoose";
const AboutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    gig: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },
    from: { type: String },
    language: { type: Array, default: [] },
    description: { type: String },
    skills: { type: Array, default: [] },
    accounts: { type: Array, default: [] },
    information: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("About", AboutSchema);
