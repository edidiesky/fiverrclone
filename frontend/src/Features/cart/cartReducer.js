import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all cart for the seller and admin
export const GetAllBuyerCart = createAsyncThunk(
  "/cart/allBuyerCart",
  async (id, thunkAPI) => {
    try {
      let cartUrl = `/api/v1/cart/${id}`;
      const { data } = await axios.get(cartUrl);
      return data.cart;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching all cart for the buyer
export const GetSingleBuyerCart = createAsyncThunk(
  "/cart/singleBuyerCart",
  async ({ id }, thunkAPI) => {
    const state = thunkAPI.getState();
    const config = {
      headers: {
        authorization: `Bearer ${state.user.token}`,
      },
    };
    try {
      let cartUrl = `/api/v1/cart/buyer/${id}`;
      const { data } = await axios.get(cartUrl, config);
      return data.cart;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
// fetching single cart based on its id
export const CreateBuyerCart = createAsyncThunk(
  "cart/createBuyerCart",
  async ({ qty }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/v1/cart/${state.gigs.GigsDetails._id}`,
        { qty },
        config
      );

      return data.cart;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single cart
export const UpdateBuyerCart = createAsyncThunk(
  "/cart/updateBuyerCart",
  async (GigsData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.Gigs.GigsDetails;
      const { data } = await axios.put(
        `/api/v1/gig/admin/${_id}`,
        GigsData,
        config
      );
      localStorage.setItem("Gigss", JSON.stringify(data.updatedGigs));
      return data.updatedGigs;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single cart
export const DeleteBuyerCart = createAsyncThunk(
  "/cart/deleteGig",
  async (cartid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(
        `/api/v1/gig/admin/${cartid}`,
        config
      );
      return cartid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated cart
export const getTopRatedGigs = createAsyncThunk(
  "/get/topRatedGigs",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/gig/rated`, config);
      return data.toprated;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated cart
export const GetTopRatedBuyerCart = createAsyncThunk(
  "/get/getGigsStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/gig/stats`, config);
      return data.stats;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
