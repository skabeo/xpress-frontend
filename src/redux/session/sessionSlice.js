import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "../../api/sessionAPI";

const initialState = {
  currentUser: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  },
  loading: false,
  error: null
}

export const signupUser = createAsyncThunk(
  'session/signupUser',
  async (payload, { rejectWithValue }) => {
    const response = await createUser(payload);
    if (response.error) {
      return rejectWithValue(response);
    }
    return response;
  }
)

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.loading = false;
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
        state.loading = false;
        state.error = 'Signup not successful'
      })
  },
});

export default sessionSlice.reducer;
