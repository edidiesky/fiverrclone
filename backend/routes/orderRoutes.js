import express from "express"
const router = express.Router()
import {
    GetOrderById,
    GetAllOrder,
    UpdateOrderToPaid,
    UpdateOrderToIsDelivered,
    CreateOrder,
    GetCustomerOrder,
    AggregateUserOrderStats
} from '../controllers/orderControllers.js'
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'


router.route('/').post(authMiddleware, CreateOrder)
router.route('/stats').get(authMiddleware, adminMiddleware, AggregateUserOrderStats)
router.route('/').get(authMiddleware, adminMiddleware, GetAllOrder)
router.get('/customer/order', authMiddleware, GetCustomerOrder)
router.route('/:id').get(authMiddleware, GetOrderById)
router.route('/:id/pay').put(authMiddleware, UpdateOrderToPaid)
router.route('/:id/delivered').put(authMiddleware, adminMiddleware, UpdateOrderToIsDelivered)
export default router


