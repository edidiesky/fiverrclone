// import express from "express";
// import path from "path";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// import { errorHandler, NotFound } from "./middleware/error-handler.js";

// import mongoose from "mongoose";

// // middlewares
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // routes
// import authRoute from "./routes/authRoute.js";
// import userRoute from "./routes/userRoute.js";
// import reviewRoute from "./routes/reviewRoutes.js";
// import gigRoute from "./routes/gigRoutes.js";
// import uploadRoute from "./routes/uploadRoute.js";
// import cartRoute from "./routes/cartRoute.js";
// import orderRoute from "./routes/orderRoutes.js";

// import chatRoute from "./routes/chatRoutes.js";

// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/gig", gigRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/upload", uploadRoute);
// app.use("/api/v1/cart", cartRoute);


// mongoose.connect(
//   process.env.MONGO_URl,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("mongo has been connected");
//   }
// );

// // production mode process
// const __dirname = path.resolve()

// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "../frontend/dist")));

// //   app.get("*", (req, res) =>
// //     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
// //   );
// // } else {
// //   app.get("/", (req, res) => {
// //     res.send("API is running....");
// //   });
// // }

// // Middlewares
// app.use(NotFound);
// app.use(errorHandler);

// app.listen(5000, () => {
//   console.log(
//     "server is listening on port 5000"
//   );
// });


import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // routes
// import authRoute from "./routes/authRoute.js";
// import userRoute from "./routes/userRoute.js";
// import reviewRoute from "./routes/reviewRoutes.js";
// import gigRoute from "./routes/gigRoutes.js";
// import uploadRoute from "./routes/uploadRoute.js";
// import cartRoute from "./routes/cartRoute.js";
// import orderRoute from "./routes/orderRoutes.js";

// import chatRoute from "./routes/chatRoutes.js";

// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/gig", gigRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/upload", uploadRoute);
// app.use("/api/v1/cart", cartRoute);

// mongoose.connect(
//   process.env.MONGO_URl,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("mongo has been connected");
//   }
// );

// // production mode process
// const __dirname = path.resolve();


app.get("/", (req, res) => {
  res.json("Hello Edidiong Essien");
});

app.use(NotFound);
app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server is Running");
});




// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "server.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/api/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/auth/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/user/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/gig/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/review/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/order/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/upload/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/api/v1/cart/(.*)",
//       "dest": "server.js"
//     },
//     {
//       "src": "/(.*)",
//       "dest": "server.js"
//     }
//   ]
// }
