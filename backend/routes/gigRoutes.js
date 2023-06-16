import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware,
} from "../middleware/authentication.js";

import {
  GetSingleGig,
  GetAllGig,
  UpdateGig,
  DeleteGig,
  GetTopRatedGig,
  CreateSingleGig,
} from "../controllers/gigControllers.js";

router
  .route("/")
  .get(GetAllGig)
  .post(authMiddleware, sellerAdminMiddleware, CreateSingleGig);

router
  .route("/:id")
  .get(GetSingleGig)
  .put(authMiddleware, sellerAdminMiddleware, UpdateGig)
  .delete(authMiddleware, DeleteGig);

export default router;
