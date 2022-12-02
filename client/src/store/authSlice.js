/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: {},
  },
  reducers: {
    login(state, action) {
      state.isAuth = true;

      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
    logout(state) {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
