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
    GetSingleBuyerCart,
} from '../controllers/cartControllers.js'


router.route('/:id')
.get(GetSingleBuyerCart)
.post(authMiddleware,CreateBuyerCart)
.get(GetAllBuyerCart)
.put(authMiddleware,UpdateBuyerCart)
.delete(authMiddleware,DeleteBuyerCart)

export default router

