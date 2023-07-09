import express from "express";
import path from "path";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
dotenv.config();
const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "eddie",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.Google_ClientId,
//       clientSecret: process.env.Google_Secret,
//       callbackURL: "http://localhost:5173",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       //   return cb(err, user);
//       // });
//       console.log(profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// app.use(
//   CookieSession({
//     name: "session",
//     keys: ["edidie"],
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours,
//   })
// );

// routes
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import gigRoute from "./routes/gigRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoutes.js";

import chatRoute from "./routes/chatRoutes.js";

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/gig", gigRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/cart", cartRoute);
// app.use("/api/v1/chat", chatRoute);

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
