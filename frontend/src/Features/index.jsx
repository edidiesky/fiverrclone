import {
  ToggleSidebar,
  offSidebar,
  onSidebar,
  ToggleCartSidebar,
  offCartSidebar,
  onCartSidebar,
} from "./toggle/toggleSlice";

import {
  getAllGigs,
  getSingleGigsDetails,
  createReviewGigs,
  CreateSingleGig,
  DeleteGig,
  UpdateGig,
} from "./gigs/gigsReducer";

import {
  getSort,
  getPage,
  clearGigsAlert,
  getQuantity,
  handleCategoryFilter,
  clearReviewAction,
  clearPage,
  getSearch,
  getGigs,
  clearGigsDetails,
} from "./gigs/gigsSlice";

import {
  getAllReviews,
  getSellerReviews,
  createReviews,
  DeleteReviews,
  UpdateReviews,
} from "./reviews/reviewsReducer";

import {
  clearAlert,
  clearReviewsAlert,
  getReviewSearch,
} from "./reviews/reviewsSlice";

import {
  addProductToCart,
  addProductToBag,
  calculateBagItem,
  removeBagItem,
  ClearBagData,
  clearCartAlert,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
  clearCartMessage,
} from "./bag/bagSlice";

import {
  clearUserAlertError,
  ClearUserInfo,
  saveShippingAddress,
  savePaymentType,
  ClearauthInfo,
  handleUserSearch,
  getUserPage,
  getUser,
} from "./user/userSlice";

import {
  registerCustomer,
  loginCustomer,
  getAllCustomer,
  getSingleCustomer,
  adminUpdateCustomer,
  adminDeleteCustomer,
  UpdateProfile,
  getUserStats,
} from "./user/userReducer";

import {
  createCustomersOrder,
  getCustomerOrder,
  updateCustomersOrderToPaid,
  getAllCustomersOrder,
  getCustomerOrderById,
  updateCustomersOrderToIsDelivered,
  getCustomerOrderStats,
  handleStripeCheckout,
  handleStripeKey,
  handlePaypalKey
} from './order/orderReducer'
import {
  orderPayReset,
  orderDelieveredReset,
  getOrderPage,

} from './order/orderSlice'

import {
  GetAllBuyerCart,
  CreateBuyerCart,
  DeleteBuyerCart,
  UpdateBuyerCart,
  GetSingleBuyerCart
} from './cart/cartReducer'

export {
  ToggleSidebar,
  offSidebar,
  onSidebar,
  ToggleCartSidebar,
  offCartSidebar,
  onCartSidebar,
  // gigs reducre export
  getAllGigs,
  getSingleGigsDetails,
  createReviewGigs,
  CreateSingleGig,
  DeleteGig,
  UpdateGig,
  getSort,
  getPage,
  clearGigsAlert,
  getQuantity,
  handleCategoryFilter,
  clearReviewAction,
  clearPage,
  getReviewSearch,
  getGigs,
  clearGigsDetails,
  clearAlert,
  clearReviewsAlert,
  getSearch,
  // reviews reducer export
  getAllReviews,
  getSellerReviews,
  createReviews,
  DeleteReviews,
  UpdateReviews,
  // customer
  registerCustomer,
  loginCustomer,
  getAllCustomer,
  getSingleCustomer,
  adminUpdateCustomer,
  adminDeleteCustomer,
  UpdateProfile,
  getUserStats,
  // 
  clearUserAlertError,
  ClearUserInfo,
  saveShippingAddress,
  savePaymentType,
  ClearauthInfo,
  handleUserSearch,
  getUserPage,
  getUser,
  // order
  createCustomersOrder,
  getCustomerOrder,
  updateCustomersOrderToPaid,
  getAllCustomersOrder,
  getCustomerOrderById,
  updateCustomersOrderToIsDelivered,
  getCustomerOrderStats,
  handleStripeCheckout,
  handleStripeKey,
  orderPayReset,
  orderDelieveredReset,
  getOrderPage,
  handlePaypalKey,

  // cart
  GetAllBuyerCart,
  CreateBuyerCart,
  DeleteBuyerCart,
  UpdateBuyerCart,
  GetSingleBuyerCart
};
