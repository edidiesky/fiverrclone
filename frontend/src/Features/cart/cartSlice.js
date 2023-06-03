import { createSlice } from "@reduxjs/toolkit";
import {
  GetAllBuyerCart,
  CreateBuyerCart,
  DeleteBuyerCart,
  UpdateBuyerCart,
  GetSingleBuyerCart
} from "./cartReducer";
const initialState = {
  // states
  cartIsSuccess: false,
  cartIsError: false,
  cartIsLoading: false,
  totalcart: 0,
  cart: null,
  cartDetails:null,

  // alert states
  showAlert: false,
  alertText: "",
  alertType: "",
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    clearCartAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.cartIsSuccess = false;
      state.cartIsError = false;
      state.cartAlert = false;
    },
    clearCart: (state, action) => {
      state.cart = null;
    },
  },

  extraReducers: {
    //
    [GetAllBuyerCart.pending]: (state) => {
      state.cartIsLoading = true;
    },
    [GetAllBuyerCart.fulfilled]: (state, action) => {
      state.cartIsLoading = false;
      state.cart = action.payload.gig;
      state.totalcart = action.payload.totalGig;
      state.showAlert = true;
      state.alertText = "All cart has been successfully fetched";
    },
    // cart
    [GetAllBuyerCart.rejected]: (state, action) => {
      state.cartIsLoading = false;
      state.showAlert = true;
      state.cartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    [GetSingleBuyerCart.pending]: (state) => {
      state.cartIsLoading = true;
    },
    [GetSingleBuyerCart.fulfilled]: (state, action) => {
      state.cartIsLoading = false;
      state.cartDetails = action.payload;
      state.showAlert = true;
    },
    // cart
    [GetSingleBuyerCart.rejected]: (state, action) => {
      state.cartIsLoading = false;
      state.showAlert = true;
      state.cartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // create cart action handling
    [CreateBuyerCart.pending]: (state) => {
      state.cartIsLoading = true;
    },
    [CreateBuyerCart.fulfilled]: (state, action) => {
      state.cartIsLoading = false;
      state.cartDetails = action.payload;
      state.cartIsSuccess = true;
      state.showAlert = true;
      state.alertText = `Your acrt has been successfully created`;
      state.alertType = "success";
    },
    [CreateBuyerCart.rejected]: (state, action) => {
      state.cartIsLoading = false;
      state.showAlert = true;
      state.cartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // update the gig
    [UpdateBuyerCart.pending]: (state) => {
      state.cartIsLoading = true;
    },
    [UpdateBuyerCart.fulfilled]: (state, action) => {
      state.cartIsLoading = false;
      state.cartIsSuccess = true;
      state.showAlert = true;
      state.alertText = "Your cart has been successfully updated";
    },
    [UpdateBuyerCart.rejected]: (state, action) => {
      state.cartIsLoading = false;
      state.showAlert = true;
      state.cartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // delete gig
    [DeleteBuyerCart.pending]: (state) => {
      state.cartIsLoading = true;
    },
    [DeleteBuyerCart.fulfilled]: (state, action) => {
      state.cartIsLoading = false;
      state.cart = state.cart.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.cartDetails.title} has been successfully deleted`;
    },
    [DeleteBuyerCart.rejected]: (state, action) => {
      state.cartIsLoading = false;
      state.showAlert = true;
      state.cartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // [getcartStats.pending]: (state) => {
    //   state.cartIsLoading = true;
    // },
    // [getcartStats.fulfilled]: (state, action) => {
    //   state.cartLoading = false;
    //   state.cartStat = action.payload;
    // },
    // [getcartStats.rejected]: (state, action) => {
    //   state.cartLoading = false;
    //   state.showAlert = true;
    //   state.cartIsError = true;
    //   state.alertText = action.payload;
    //   state.alertType = "danger";
    // },
  },
});

export const { clearCart, clearcartAlert } = CartSlice.actions;

export default CartSlice.reducer;
