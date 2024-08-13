import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

  const initialState: UserState = {users: []};

  /* Creating Slices: 
  name of slice,
  initialstate,
  reducers,
  - addUser( (state, action with type PayLoadAction with type User => {
    found user PUSHED onto list of users in the state)}), 

  - setStatusMessage((state, action: payloadaction with type id, and a string message =>{
    find the user with the matching id from payload action, 
    if user found update with message)}
)
  - addFriend(state, action:payLoadAction containing user id (num) + firend id(num) => {
    const user = the person who is matching the id, 
    if user not matching friends.id, then push her into firends array)}

  })*/
  
  const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {


    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },




    setStatusMessage: (state, action: PayloadAction<{ id: number; statusMessage: string }>) => {
    const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.statusMessage = action.payload.statusMessage;
      }
    },


    addFriend: (state, action: PayloadAction<{ userId: number; friendId: number }>) => {
      const user = state.users.find((user) => user.id === action.payload.userId);
      if (user && !user.friends.includes(action.payload.friendId)) {
        user.friends.push(action.payload.friendId);
      }
    },
  },
});

export default userSlice.reducer
// exporting actions 
export const {addUser,setStatusMessage, addFriend } = userSlice.actions





