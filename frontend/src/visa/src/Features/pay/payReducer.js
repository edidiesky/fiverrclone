import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all Visa
export const getCoinBaseUrl = createAsyncThunk(
  "/pay/CoinBase",
  async ({ TotalShoppingPrice }, thunkAPI) => {
    try {
      // const { page, category, search, sort, color, limit } = thunkAPI.getState().Visa
      let VisaUrl = `/api/v1/pay`;
      const { data } = await axios.post(VisaUrl, { TotalShoppingPrice });
      return data.createdCharge.hosted_url;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
