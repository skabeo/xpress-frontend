import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:3000/api/v1/auth'

const initialState = {
  currentUser: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  },
  isLoading: false,
  error: null
}

export const signupUser = createAsyncThunk('session/signupUser', async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, payload);
    return response.data
  } catch(error) {
    return 'Error occurred'
  }
})

export const loginUser = createAsyncThunk('session/loginUser', async (payload, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, payload);
    const authorizationHeader = response.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    console.log('Token:', token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.isLoading = false;
        state.currentUser = {
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          role: data.role,
        }
        state.error = false;
      })
      .addCase(signupUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'An error occurred during signup'
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.isLoading = false;
        state.currentUser = {
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          role: data.role,
        }
        state.error = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Incorrect password or email';
      });
  },
});

export default sessionSlice.reducer;
