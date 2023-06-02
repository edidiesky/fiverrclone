import { configureStore } from "@reduxjs/toolkit";
import gigsSlice from "./Features/gigs/gigsSlice";
import bagSlice from "./Features/bag/bagSlice";
import toggleReducer from "./Features/toggle/toggleSlice";
import userSlice from "./Features/user/userSlice";
import orderSlice from "./Features/order/orderSlice";

import modalSlice from "./Features/modal/modalSlice";
import reviewsSlice from "./Features/reviews/reviewsSlice";
import cartSlice from "./Features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    gigs: gigsSlice,
    toggle: toggleReducer,
    bag: bagSlice,
    user: userSlice,
    order: orderSlice,
    modal: modalSlice,
    reviews:reviewsSlice,
    cart:cartSlice
  },
});
