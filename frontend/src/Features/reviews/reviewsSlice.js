import { createSlice } from "@reduxjs/toolkit";
import {
  getAllReviews,
  getSellerReviews,
  createReviews,
  DeleteReviews,
  UpdateReviews,
} from "./reviewsReducer";

const reviews = JSON.parse(localStorage.getItem("reviews"));

const initialState = {
  // states
  reviewSuccess: false,
  reviewError: false,
  reviewLoading: false,
  totalreviews: 0,
  reviews: null,
  reviewsDetails:null,

  // alert states
  showAlert: false,
  alertText: "",
  alertType: "",
  noOfPages: 0,

  // req queries
  search: "",
  user: "",
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    getReviewSearch: (state, action) => {
      state.search = action.payload;
    },
    clearReviewsAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.reviewSuccess = false;
      state.reviewError = false;
      state.category = "";
      state.search = "";
      state.reviewsAlert = false;
    },
  },

  extraReducers: {
    //
    [getAllReviews.pending]: (state) => {
      state.reviewLoading = true;
    },
    [getAllReviews.fulfilled]: (state, action) => {
      state.reviewLoading = false;
      state.reviews = action.payload.reviews;
      state.showAlert = true;
      state.alertText = "All reviews has been successfully fetched";
    },
    // reviews
    [getAllReviews.rejected]: (state, action) => {
      state.reviewLoading = false;
      state.showAlert = true;
      state.reviewError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // create reviews action handling
    [createReviews.pending]: (state) => {
      state.reviewLoading = true;
    },
    [createReviews.fulfilled]: (state, action) => {
      state.reviewLoading = false;
      state.reviewsDetails = action.payload;
      state.reviewSuccess = true;
      state.showAlert = true;
      state.alertText = `Your review has been successfully created`;
      state.alertType = "success";
    },
    [createReviews.rejected]: (state, action) => {
      state.reviewLoading = false;
      state.showAlert = true;
      state.reviewError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // get seller reviews
    [getSellerReviews.pending]: (state) => {
      state.reviewLoading = true;
    },
    [getSellerReviews.fulfilled]: (state, action) => {
      state.reviewLoading = false;
      state.reviews = action.payload;
    },
    [getSellerReviews.rejected]: (state, action) => {
      state.reviewLoading = false;
      state.showAlert = true;
      state.reviewError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // update the reviews
    [UpdateReviews.pending]: (state) => {
      state.reviewLoading = true;
    },
    [UpdateReviews.fulfilled]: (state, action) => {
      state.reviewLoading = false;
      state.reviewSuccess = true;
      state.showAlert = true;
      state.alertText = "reviews has been successfully updated";
    },
    [UpdateReviews.rejected]: (state, action) => {
      state.reviewLoading = false;
      state.showAlert = true;
      state.reviewError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // delete reviews
    [DeleteReviews.pending]: (state) => {
      state.reviewLoading = true;
    },
    [DeleteReviews.fulfilled]: (state, action) => {
      state.reviewLoading = false;
      state.reviews = state.reviews.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.reviewsDetails.title} has been successfully deleted`;
    },
    [DeleteReviews.rejected]: (state, action) => {
      state.reviewLoading = false;
      state.showAlert = true;
      state.reviewError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },
  },
});

// console.log(reviewsSlice);
export const {
  clearAlert,
  clearReviewsAlert,
  getReviewSearch,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;
