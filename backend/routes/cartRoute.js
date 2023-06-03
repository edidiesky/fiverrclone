import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware,
} from "../middleware/authentication.js";

import {
  GetTopRatedBuyerCart,
  CreateBuyerCart,
  DeleteBuyerCart,
  UpdateBuyerCart,
  GetAllBuyerCart,
  GetSingleBuyerCart,
} from "../controllers/cartControllers.js";

router.route("/buyer/:id").get(authMiddleware, GetSingleBuyerCart);
router
  .route("/:id")
  .post(authMiddleware, CreateBuyerCart)
  .get(authMiddleware, GetAllBuyerCart)
  .put(authMiddleware, UpdateBuyerCart)
  .delete(authMiddleware, DeleteBuyerCart);

export default router;
