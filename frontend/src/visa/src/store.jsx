import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./Features/bag/bagSlice";
import toggleReducer from "./Features/toggle/toggleSlice";
import modalSlice from "./Features/modal/modalSlice";
import visaSlice from "./Features/visa/visaSlice";
import investmentSlice from "./Features/apartment/apartmentSlice";
import paySlice from "./Features/pay/paySlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    bag: bagSlice,
    modal: modalSlice,
    visa: visaSlice,
    investment:investmentSlice,
    pay:paySlice,
    
  },
});
