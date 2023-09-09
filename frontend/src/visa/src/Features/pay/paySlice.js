import { createSlice } from "@reduxjs/toolkit";
import {
  getCoinBaseUrl,
} from "./payReducer";


const initialState = {
  paySuccess: false,
  payError: false,
  payLoading: false,
  showAlert: false,
  alertText: "",
  url:''
};

const paySlice = createSlice({
  name: "pay",
  initialState,

  extraReducers: {
    //
    [getCoinBaseUrl.pending]: (state) => {
      state.isLoading = true;
    },
    [getCoinBaseUrl.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.url = action.payload;
    },
    [getCoinBaseUrl.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
   
  },
});

export default paySlice.reducer;
