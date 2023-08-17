import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: ''
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setLoading (state, action) {
      state.loading = action.payload;
    },
    setUsersuccess (state, action) {
      state.users.push(...action.payload);
    },
  }
})

export default tableSlice.reducer;