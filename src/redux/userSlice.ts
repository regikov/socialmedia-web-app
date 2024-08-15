import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockUsers } from '@/app/user/[userId]/mockusers';

interface User {
  id: number;
  name: string;
  profilePicture: string;
  statusMessage: string;
  friends: number[];
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: mockUsers,  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setStatusMessage: (
      state,
      action: PayloadAction<{ id: number; statusMessage: string }>
    ) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.statusMessage = action.payload.statusMessage;
      }
    },
    addFriend: (
      state,
      action: PayloadAction<{ userId: number; friendId: number }>
    ) => {
      const user = state.users.find((user) => user.id === action.payload.userId);
      if (user && !user.friends.includes(action.payload.friendId)) {
        user.friends.push(action.payload.friendId);
      }
    },
  },
});

export const { addUser, setStatusMessage, addFriend } = userSlice.actions;
export default userSlice.reducer; 
