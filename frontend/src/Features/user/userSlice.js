import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  registerCustomer,
  loginCustomer,
  getAllCustomer,
  getSingleCustomer,
  adminUpdateCustomer,
  adminDeleteCustomer,
  UpdateProfile,
  getUserStats,
} from "./userReducer";

// Local Storage Data
const customerData = JSON.parse(localStorage.getItem("customer"));
const customerToken = localStorage.getItem("customertoken");
const addressData = JSON.parse(localStorage.getItem("address"));
const paymentData = localStorage.getItem("payment");

const initialState = {
  isSuccess: false,
  isError: false,
  userInfo: customerData ? customerData : null,
  userDetails: null,
  isLoading: false,
  token: customerToken ? customerToken : "",
  showAlert: false,
  users: [],
  alertText: "",
  alertType: "",
  addressData: addressData ? addressData : {},
  paymentData: paymentData ? paymentData : {},
  userpage: 1,
  usernoOfpage: 0,
  totalUser: 0,
  userStats: null,
  userAlert: false,
  loginSuccess:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveShippingAddress: (state, action) => {
      const addressPayload = action.payload;
      state.addressData = addressPayload;
      localStorage.setItem("address", JSON.stringify(state.addressData));
    },
    savePaymentType: (state, action) => {
      const paymentPayload = action.payload;
      state.paymentData = action.payload;
      localStorage.setItem("payment", state.paymentData);
    },
    ClearauthInfo: (state, action) => {
      localStorage.removeItem("address");
    },
    getUser: (state, action) => {
      state.userAlert = true;
      state.userDetails = action.payload;
    },
    clearUserAlertError: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.userAlert = false;
    },
    ClearUserInfo: (state, action) => {
      localStorage.removeItem("customertoken");
      localStorage.removeItem("customer");
      state.isLoading = false;
      state.alertType = "";
      state.showAlert = false;
      state.alertText = "";
    },
    getUserPage: (state, action) => {
      state.userpage = action.payload;
    },
    handleUserSearch: (state, action) => {
      const userpayload = action.payload;
      state.users = state.users.filter((user) => {
        if (
          user.username.toLowerCase().includes(userpayload) ||
          user.email.toLowerCase().includes(userpayload)
        ) {
          return true;
        }
        return false;
      });
    },
  },
  extraReducers: {
    [registerCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [registerCustomer.fulfilled]: (state, action) => {
      //
      state.isLoading = false;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = "Registration successfull. ...Redirecting soon!";
      state.alertType = "success";
    },
    [registerCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [loginCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [loginCustomer.fulfilled]: (state, action) => {
      //
      state.isLoading = false;
      state.loginSuccess = true;
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
      state.showAlert = true;
      state.alertText = "Login successfull. ...Redirecting soon!";
      state.alertType = "success";
    },
    [loginCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getAllCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCustomer.fulfilled]: (state, action) => {
      //
      state.isLoading = false;
      state.users = action.payload.user;
      state.usernoOfpage = action.payload.noOfPages;
      state.totalUser = action.payload.totalUser;
      state.showAlert = true;
      state.alertText =
        "All User in the data base has been successfully gotten!";
      state.alertType = "success";
    },
    [getAllCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getUserStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserStats.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userStats = action.payload;
      state.showAlert = true;
      state.alertText =
        "All User in the data base has been successfully gotten!";
      state.alertType = "success";
    },
    [getUserStats.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getSingleCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleCustomer.fulfilled]: (state, action) => {
      //
      state.isLoading = false;
      state.userDetails = action.payload.user;
      state.showAlert = true;
      state.alertText = `"${action.payload.user.firstname}" Your profile details has been sucessfully fetched`;
    },
    [getSingleCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [adminDeleteCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [adminDeleteCustomer.fulfilled]: (state, action) => {
      //

      const userpayload = action.payload;
      state.users = state.users.filter((x) => x._id !== userpayload);
      state.isLoading = false;
      state.showAlert = true;
      state.isSuccess = true;
      state.alertText = `"${state.userDetails.firstname}" has been successfully deleted`;
      state.alertType = "success";
    },
    [adminDeleteCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [adminUpdateCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [adminUpdateCustomer.fulfilled]: (state, action) => {
      //
      state.isLoading = false;
      state.showAlert = true;
      state.isSuccess = true;
      state.alertText = "The user has been successfully Updated";
      state.alertType = "success";
      state.showAlert = true;
    },
    [adminUpdateCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    [UpdateProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [UpdateProfile.fulfilled]: (state, action) => {
      //
      state.isLoading = false;
      state.showAlert = true;
      state.userInfo = action.payload.updatedUser;
      state.isSuccess = true;
      state.alertText = `"${action.payload.user.firstname}" Your profile details has been sucessfully updated`;
      state.alertType = "success";
    },
    [UpdateProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.showAlert = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
  },
});

// console.log(userSlice);
export const {
  clearUserAlertError,
  ClearUserInfo,
  saveShippingAddress,
  savePaymentType,
  handleUserSearch,
  ClearauthInfo,
  getUserPage,
  getUser,
} = userSlice.actions;

export default userSlice.reducer;
