import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isLogin: boolean;
  user: {
    username?: string;
    email?: string;
  };
};

let initialAuthState: AuthState = {
  isLogin: false,
  user: {},
};

const localStorageAuthState = localStorage.getItem('auth');
if (localStorageAuthState) initialAuthState = JSON.parse(localStorageAuthState);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; email: string }>) {
      state.isLogin = true;
      state.user = action.payload;

      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout(state) {
      state.isLogin = false;
      state.user = {};

      localStorage.removeItem('auth');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
