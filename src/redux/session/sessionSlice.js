import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
  },
  loading: false,
  error: null
}

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default sessionSlice.reducer;
