import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(
//   cors({
//     origin: "https://fiverrclone-client.vercel.app",
//     methods: ["POST", "PUT", "DELETE", "GET"],
//     credentials: "true",
//   })
// );

const allowedOrigins = ["https://fiverrclone-client.vercel.app"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// // // routes
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import gigRoute from "./routes/gigRoutes.js";
// import uploadRoute from "./routes/uploadRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoutes.js";

// import chatRoute from "./routes/chatRoutes.js";

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/gig", gigRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/cart", cartRoute);

mongoose.connect(
  process.env.MONGO_URl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongo has been connected");
  }
);

app.use(NotFound);
app.use(errorHandler);
app.listen(3001, () => {
  console.log("Server is Running");
});
