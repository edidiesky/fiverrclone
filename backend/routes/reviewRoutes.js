import express from "express";
const router = express.Router();

import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware,
} from "../middleware/authentication.js";
import {
  createReviews,
  getSellerReviews,
  DeleteReviews,
  getAllReviews
} from "../controllers/reviewControllers.js";

router
  .route("")
  .get(authMiddleware,adminMiddleware,getAllReviews)

router
  .route("/:id")
  .get(getSellerReviews)
  .delete(authMiddleware, DeleteReviews)
  .post(authMiddleware, createReviews);
export default router;
