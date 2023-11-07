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
    console.log(response)
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
        console/log(action)
        state.loading = false;
        state.currentUser = {
          id: action.payload.id,
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          email: action.payload.email,
          role: action.payload.role,
        }
        state.error = false;
      })
  },
});

export default sessionSlice.reducer;
