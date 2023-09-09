import { createSlice } from "@reduxjs/toolkit";
import {
  getAllinvestment,
  getSingleinvestmentDetails,
  CreateSingleinvestment,
  adminDeleteinvestment,
  adminUpdateinvestment,
} from "./apartmentReducer";


const initialState = {
  isSuccess: false,
  isError: false,
  investment: null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  investmentAlert: false,
  investmentDetails:null
};

const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    clearinvestmentAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.isSuccess = false;
      state.isError = false;
    },
  },

  extraReducers: {
    //
    [getAllinvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllinvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investment = action.payload;
      state.showAlert = true;
      state.alertText = "All investment has been successfully fetched";
    },
    [getAllinvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    [CreateSingleinvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [CreateSingleinvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investment = action.payload;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = `${action.payload.title} has been successfully addded to your investment data base`;
      state.alertType = "success";
    },
    [CreateSingleinvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getSingleinvestmentDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleinvestmentDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investmentDetails = action.payload;
    },
    [getSingleinvestmentDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [adminUpdateinvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [adminUpdateinvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = "investment has been successfully updated";
    },
    [adminUpdateinvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    [adminDeleteinvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [adminDeleteinvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investment = state.investment.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.investmentDetails.title} has been successfully deleted`;
    },
    [adminDeleteinvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },
  },
});

export const { clearAlert } = investmentSlice.actions;

export default investmentSlice.reducer;
