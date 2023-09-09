import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all investment
export const getAllinvestment = createAsyncThunk(
  "/fetch/allinvestment",
  async (name, thunkAPI) => {
    try {
      // const { page, category, search, sort, color, limit } = thunkAPI.getState().investment
      let investmentUrl = `/api/v1/investment`;
      const { data } = await axios.get(investmentUrl);
      return data.investment;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single investment based on its id
export const getSingleinvestmentDetails = createAsyncThunk(
  "investment/getinvestmentDetails",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/investment/${name}`);

      return data.investment;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single investment based on its id
export const CreateSingleinvestment = createAsyncThunk(
  "investment/createinvestment",
  async (investmentData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(`/api/v1/investment`, investmentData, config);

      return data.investment;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single investment for the admin
export const adminUpdateinvestment = createAsyncThunk(
  "/updateinvestment",
  async (investmentData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.investment.investmentDetails;
      const { data } = await axios.put(
        `/api/v1/investment/admin/${_id}`,
        investmentData,
        config
      );
      localStorage.setItem("investments", JSON.stringify(data.updatedinvestment));
      return data.updatedinvestment;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single investment for the admin
export const adminDeleteinvestment = createAsyncThunk(
  "/admin/deleteinvestment",
  async (investmentid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(
        `/api/v1/investment/admin/${investmentid}`,
        config
      );
      return investmentid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

