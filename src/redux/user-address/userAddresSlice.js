import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:3000/api/v1/user_addresses';
const accessToken = localStorage.getItem("TOKEN");

const initialState = {
  isLoading: false,
  userAddress: {
    address: '',
    city: '',
    phoneNumber: '',
    phoneNumber2: '',
  },
  error: null,
};

export const fetchUserAddress = createAsyncThunk('userAddress/fetchUserAddress', async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch(error) {
    return "Can't retrieve user address";
  }
});

const userAddressSlice = createSlice({
  name: 'userAddress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.userAddress = {};
      })
      .addCase(fetchUserAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userAddress = action.payload;
      })
      .addCase(fetchUserAddress.rejected, (state) => {
        state.isLoading = false;
        state.error = 'An error occured'
        state.userAddress = {}
      })
  }
});

export default userAddressSlice.reducer;
