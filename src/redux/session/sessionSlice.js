import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:3000/api/v1/auth';

const getToken = () => {
  return localStorage.getItem('TOKEN');
}

const initialState = {
  currentUser: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  },
  isLoading: false,
  error: null,
  accessToken: ''
}

export const signupUser = createAsyncThunk('session/signupUser', async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, payload);
    const authorizationHeader = response.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    saveToken(token)
    
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
    saveToken(token)

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const logoutUser = createAsyncThunk('session/logout', 
async (accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  try {
    const response = axios.delete(`${BASE_URL}/logout`, config)
    return response.data
  } catch (error) {
    return error.response.data;
  }
})

const saveToken = (token) => {
  localStorage.setItem('TOKEN', token)
}

const removeToken = () => {
  localStorage.removeItem('TOKEN')
}

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
        state.accessToken = getToken()
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Incorrect password or email';
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.currentUser = {
          id: undefined,
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          role: undefined
        }
        removeToken();
      })
  },
});

export default sessionSlice.reducer;
