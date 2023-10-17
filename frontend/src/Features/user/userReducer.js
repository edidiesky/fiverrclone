import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// https://fiverrclone-api.vercel.app
const Registerurl = `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/register`;
const Loginurl = `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/login`;

export const registerCustomer = createAsyncThunk(
  "registerUser",
  async (registerData, thunkAPI) => {
    try {
      // console.log(registerData);
      const { data } = await axios.post(Registerurl, registerData);
      localStorage.setItem("customer", JSON.stringify(data.user));
      localStorage.setItem("customertoken", data.token);
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

export const googleAuth = createAsyncThunk(
  "google",
  async (registerData, thunkAPI) => {
    try {
      // console.log(registerData);
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/goggle`, registerData);
      // localStorage.setItem("customer", JSON.stringify(data.user));
      // localStorage.setItem("customertoken", data.token);
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

export const loginCustomer = createAsyncThunk(
  "loginCustomer",
  async (loginData, thunkAPI) => {
    try {
      // console.log(loginData);

      const { data } = await axios.post(Loginurl, loginData);
      localStorage.setItem("customer", JSON.stringify(data.user));
      localStorage.setItem("customertoken", data.token);
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

// get all user for the admin
export const getAllCustomer = createAsyncThunk(
  "getAllCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { userpage } = state.user;

      const { data } = await axios.get(`/api/v1/user?page=${userpage}`, config);
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

// get all user for the admin
export const getUserStats = createAsyncThunk(
  "getStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/user/stats`, config);
      return data.usersStats;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// get a single user for the admin
export const getSingleCustomer = createAsyncThunk(
  "getSingleCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/user/profile/${name}`);
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

// Update a single user for the admin
export const adminUpdateCustomer = createAsyncThunk(
  "adminUpdateCustomer",
  async (Userformdata, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.user.userDetails;
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/user/admin/profile/${_id}`,
        Userformdata,
        config
      );
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

// Update a single user for the admin
export const UpdateProfile = createAsyncThunk(
  "UpdateProfile",
  async (profiledata, thunkAPI) => {
    // console.log(profiledata)
    const state = thunkAPI.getState();
    try {
      // console.log(profiledata)
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.user.userInfo;
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/user/profile/${_id}`,
        profiledata,
        config
      );
      localStorage.setItem("customer", JSON.stringify(data.updatedUser));
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

// Delete a single user for the admin
export const adminDeleteCustomer = createAsyncThunk(
  "adminDeleteCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };

      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/user/admin/profile/${name}`,
        config
      );
      return name;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
