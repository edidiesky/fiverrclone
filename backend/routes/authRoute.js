import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

import {
  registerUser,
  LoginUser,
} from "../controllers/authController.js";

router.post("/register", registerUser);
router.post("/login", LoginUser);

export default router;
