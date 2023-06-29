import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

import { registerUser, LoginUser } from "../controllers/authController.js";
import passport from "passport";

// authenticate with google route
router.get("/goggle", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/goggle/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.post("/register", registerUser);
router.post("/login", LoginUser);

export default router;
