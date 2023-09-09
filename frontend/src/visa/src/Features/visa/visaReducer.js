import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all Visa
export const getAllVisa = createAsyncThunk(
  "/get/allVisa",
  async (name, thunkAPI) => {
    try {
      // const { page, category, search, sort, color, limit } = thunkAPI.getState().Visa
      let VisaUrl = `/api/v1/visa`;
      const { data } = await axios.get(VisaUrl);
      return data.visa;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);


// fetching single Visa based on its id
export const getSingleVisaDetails = createAsyncThunk(
  "Visa/getVisaDetails",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/visa/${name}`);

      return data.visa;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single Visa based on its id
export const CreateSingleVisa = createAsyncThunk(
  "Visa/createVisa",
  async (visaData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(`/api/v1/visa`, visaData, config);

      return data.visa;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single Visa for the admin
export const adminUpdateVisa = createAsyncThunk(
  "/updateVisa",
  async (visaData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.Visa.VisaDetails;
      const { data } = await axios.put(
        `/api/v1/visa/admin/${_id}`,
        visaData,
        config
      );
      localStorage.setItem("Visas", JSON.stringify(data.updatedVisa));
      return data.updatedVisa;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single Visa for the admin
export const adminDeleteVisa = createAsyncThunk(
  "/admin/deleteVisa",
  async (Visaid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(
        `/api/v1/visa/admin/${Visaid}`,
        config
      );
      return Visaid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

