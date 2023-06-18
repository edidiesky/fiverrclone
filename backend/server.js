import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import connectDb from "./db/connect.js";
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import gigRoute from "./routes/gigRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoutes.js";

import chatRoute from "./routes/chatRoutes.js";
import stripeCheckout from "./controllers/stripeController.js";

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/gig", gigRoute);
app.use("/api/v1/review", reviewRoute);
app.use('/api/v1/order', orderRoute);
app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/chat", chatRoute);
app.post("/api/v1/create-payment-intent", stripeCheckout);
app.get("/api/v1/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.get("/stripekey", (req, res) => {
  res.send(process.env.STRIPE_KEY);
});

// app.post('/stripe', Stripepayment)
// app.get('/payment_intents', getAllStripePaymentIntent)
const __dirname = path.resolve();

app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "/public/uploads"))
);

// console.log((path.join(__dirname, '/public/uploads')))

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

// production mode process

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

// Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server is listening on port 4000");
});
