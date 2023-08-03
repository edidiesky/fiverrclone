import { createSlice } from "@reduxjs/toolkit";

import {
  createCustomersOrder,
  getCustomerOrder,
  getAllCustomersOrder,
  updateCustomersOrderToPaid,
  getCustomerOrderById,
  updateCustomersOrderToIsDelivered,
  getCustomerOrderStats,
  handlePaypalKey,
} from "./orderReducer";

const initialState = {
  orderisSuccess: false,
  orderisError: false,
  order: null,
  orders: null,
  orderisLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  loadingPay: false,
  successPay: false,
  loadingdelivered: false,
  successdelivered: false,
  orderStats: null,
  isStatLoading: false,
  isStatError: false,
  isStatSuccess: false,
  keys: "",
  orderpage: 1,
  ordernoOfpage: 0,
  totalorder: 0,
  isloadingPayalKey: false,
  urls: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    orderPayReset: (state, action) => {
      state.loadingPay = false;
      state.successPay = false;
    },
    orderDelieveredReset: (state, action) => {
      state.loadingdelivered = false;
      state.successdelivered = false;
    },
    getOrderPage: (state, action) => {
      state.orderpage = action.payload;
    },
  },
  extraReducers: {
    // creating customers order
    [createCustomersOrder.pending]: (state) => {
      state.orderisLoading = true;
    },
    [createCustomersOrder.fulfilled]: (state, action) => {
      state.orderisLoading = false;
      state.order = action.payload.order;
      state.urls = action.payload.url;
      state.orderisSuccess = true;
    },
    [createCustomersOrder.rejected]: (state, action) => {
      state.orderisLoading = false;
      state.showAlert = true;
      state.orderisError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting customers order
    [getCustomerOrderById.pending]: (state) => {
      state.orderisLoading = true;
    },
    [getCustomerOrderById.fulfilled]: (state, action) => {
      state.orderisLoading = false;
      state.order = action.payload;
    },
    [getCustomerOrderById.rejected]: (state, action) => {
      state.orderisLoading = false;
      state.showAlert = true;
      state.orderisError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting customers order stats
    [getCustomerOrderStats.pending]: (state) => {
      state.isStatLoading = true;
    },
    [getCustomerOrderStats.fulfilled]: (state, action) => {
      state.isStatLoading = false;
      state.orderStats = action.payload;
    },
    [getCustomerOrderStats.rejected]: (state, action) => {
      state.isStatLoading = false;
      state.showAlert = true;
      state.isStatError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting customers order
    [getCustomerOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getCustomerOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    [getCustomerOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting all customers order
    [getAllCustomersOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCustomersOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.order;
      state.orderpage = action.payload.noOfPages;
      state.totalorder = action.payload.totalOrder;
    },
    [getAllCustomersOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // updating customers order to paid
    [updateCustomersOrderToPaid.pending]: (state) => {
      state.loadingPay = true;
    },
    [updateCustomersOrderToPaid.fulfilled]: (state, action) => {
      state.loadingPay = false;
      state.order = action.payload;
      state.successPay = true;
    },
    [updateCustomersOrderToPaid.rejected]: (state, action) => {
      state.loadingPay = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // updating customers order to delivered
    [updateCustomersOrderToIsDelivered.pending]: (state) => {
      state.loadingdelivered = true;
    },
    [updateCustomersOrderToIsDelivered.fulfilled]: (state, action) => {
      state.loadingdelivered = false;
      state.order = action.payload;
      state.successdelivered = true;
    },
    [updateCustomersOrderToIsDelivered.rejected]: (state, action) => {
      state.loadingdelivered = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // get stripe Key
    [handlePaypalKey.pending]: (state) => {
      state.isloadingPayalKey = true;
    },
    [handlePaypalKey.fulfilled]: (state, action) => {
      state.isloadingPayalKey = false;
      state.keys = action.payload;
    },
    [handlePaypalKey.rejected]: (state, action) => {
      state.isloadingPayalKey = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
  },
});

// console.log(orderSlice);
export const {
  clearAlert,
  orderPayReset,
  orderDelieveredReset,
  getOrderPage,
} = orderSlice.actions;

export default orderSlice.reducer;
