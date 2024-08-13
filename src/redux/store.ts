import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;





/*
-> Store = source of truth, a container that holds all the information (state) of the app-

-> Configurestore() where all the app’s state will live, and it automatically connects everything needed, like reducers and middleware.


*/