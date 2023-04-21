import express from "express"
const router = express.Router()
import {
    GetSingleProduct,
    GetAllProduct,
    UpdateProduct,
    DeleteProduct,
    ReviewProduct,
    GetTopRatedProduct,
    CreateSingleProduct,
    AggregateUserProductStats
}

    from '../controllers/productControllers.js'
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'



router.route('/').get(GetAllProduct)
    .post(authMiddleware, adminMiddleware, CreateSingleProduct)
router.route('/rated').get(GetTopRatedProduct)
router.route('/stats').get(authMiddleware, adminMiddleware, AggregateUserProductStats)
router.route('/:id').get(GetSingleProduct)
router.route('/review/:id').post(authMiddleware, ReviewProduct)
router.route('/admin/:id')
    .delete(authMiddleware, adminMiddleware, DeleteProduct)
    .put(authMiddleware, adminMiddleware, UpdateProduct)



export default router


