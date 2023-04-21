import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";
import {
  GetAboutById,
  GetAllAbout,
  UpdateAbout,
  DeleteAbout,
  AdminUpdateAbout,
  CreateAbout,
} from "../controllers/aboutController.js";

router.get("/", authMiddleware, adminMiddleware, GetAllAbout);
// router.get('/stats', authMiddleware, adminMiddleware, AggregateAboutStats)
router
  .route("/admin/:id")
  .delete(authMiddleware, adminMiddleware, DeleteAbout)
  .get(authMiddleware, GetAboutById)
  .put(authMiddleware, adminMiddleware, AdminUpdateAbout);

  // users section
router.route("/").post(authMiddleware, CreateAbout);
router.route("/:id").put(authMiddleware, UpdateAbout).get(authMiddleware, GetAboutById)
export default router;
