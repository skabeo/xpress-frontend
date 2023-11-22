import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "../../api/sessionAPI";
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

// export const signupUser = createAsyncThunk(
//   'session/signupUser',
//   async (payload, { rejectWithValue }) => {
//     const response = await createUser(payload);
//     if (response.error) {
//       return rejectWithValue(response);
//     }
//     return response;
//   }
// )

export const signupUser = createAsyncThunk('session/signupUser', async (payload) => {
  try {
    const response = axios.post(`${BASE_URL}/signup`, payload);
    console.log(response.data);
    return response.data
  } catch(error) {
    throw error;
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
        state.error = 'Signup not successful'
      })
  },
});

export default sessionSlice.reducer;
