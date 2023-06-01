import express from "express"
const router = express.Router()
import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware
} from "../middleware/authentication.js";

import {
    GetTopRatedBuyerCart,
    CreateBuyerCart,
    DeleteBuyerCart,
    UpdateBuyerCart,
    GetAllBuyerCart,
} from '../controllers/cartControllers.js'


router.route('/:id')
.post(authMiddleware,CreateBuyerCart)
.get(authMiddleware,GetAllBuyerCart)
.put(authMiddleware,UpdateBuyerCart)
.delete(authMiddleware,DeleteBuyerCart)

export default router

