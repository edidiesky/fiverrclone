import { createSlice } from "@reduxjs/toolkit";
import {
  getAllVisa,
  getSingleVisaDetails,
  CreateSingleVisa,
  adminDeleteVisa,
  adminUpdateVisa,
} from "./visaReducer";


const initialState = {
  isSuccess: false,
  isError: false,
  visa: null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  visaAlert: false,
  visaDetails:null
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    clearvisaAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.isSuccess = false;
      state.isError = false;
    },
  },

  extraReducers: {
    //
    [getAllVisa.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllVisa.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.visa = action.payload;
    
      state.showAlert = true;
      state.alertText = "All Visa has been successfully fetched";
    },
    [getAllVisa.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    [CreateSingleVisa.pending]: (state) => {
      state.isLoading = true;
    },
    [CreateSingleVisa.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.visa = action.payload;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = `${action.payload.title} has been successfully addded to your visa data base`;
      state.alertType = "success";
    },
    [CreateSingleVisa.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [getSingleVisaDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleVisaDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.visaDetails = action.payload;
    },
    [getSingleVisaDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    [adminUpdateVisa.pending]: (state) => {
      state.isLoading = true;
    },
    [adminUpdateVisa.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.showAlert = true;
      state.alertText = "Visa has been successfully updated";
    },
    [adminUpdateVisa.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    [adminDeleteVisa.pending]: (state) => {
      state.isLoading = true;
    },
    [adminDeleteVisa.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.visa = state.visa.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.visaDetails.title} has been successfully deleted`;
    },
    [adminDeleteVisa.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },
  },
});

// console.log(visaSlice);
export const { clearAlert } = visaSlice.actions;

export default visaSlice.reducer;
