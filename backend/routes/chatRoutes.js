import express from "express";
const router = express.Router();

import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware,
} from "../middleware/authentication.js";
import {
  createChat,
  getSingleChat,
  DeleteChat,
  getAllChat,
  UpdateChat,
} from "../controllers/chatControllers.js";

router.route("").post(authMiddleware, createChat);

router
  .route("/:id")
  .get(getSingleChat)
  .delete(authMiddleware, DeleteChat)
  .post(authMiddleware, UpdateChat);
export default router;
