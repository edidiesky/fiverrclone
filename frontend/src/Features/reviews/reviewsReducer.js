import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all Review
export const getAllReviews = createAsyncThunk(
  "/fetch/allreviews",
  async (name, thunkAPI) => {
    try {
      let reviewUrl = `/api/v1/review`;
      const { data } = await axios.get(reviewUrl);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching selller Review
export const getSellerReviews = createAsyncThunk(
  "review/getSellerReviews",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/review/${name}`);

      return data.reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single Review for the admin
export const UpdateReviews = createAsyncThunk(
  "/review/updatereview",
  async (reviewsData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.Review.reviewsDetails;
      const { data } = await axios.put(
        `/api/v1/review/admin/${_id}`,
        reviewsData,
        config
      );
      localStorage.setItem("reviewss", JSON.stringify(data.updatedreviews));
      return data.updatedreviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single Review for the admin
export const DeleteReviews = createAsyncThunk(
  "/admin/deletereview",
  async (reviewsid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(
        `/api/v1/review/admin/${reviewsid}`,
        config
      );
      return reviewsid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Create a review access point for the user
export const createReviews = createAsyncThunk(
  "/review/createreview",
  async ({ Reviewdata, id }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/v1/review/${id}`,
        Reviewdata,
        config
      );
      return data.review;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
