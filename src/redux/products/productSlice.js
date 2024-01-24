import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:3000/api/v1/products';

const initialState = {
  isLoading: false,
  products: {},
  error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch(error) {
    return "Can't retrieve products";
  }
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.products = {};
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'An error occured'
        state.products = {}
      })
  }
})

export default productSlice.reducer;
