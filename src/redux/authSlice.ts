import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  currentUserId: number | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUserId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.isLoggedIn = true;
      state.currentUserId = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUserId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
