

/*
2. Redux folder 

 ---- userSlice.ts (centrally manages the state of the user)

- stores an array of users, where each user has attributes like id, name, profilePicture, statusMessage, and friends.

 - defines actions to dispatch to modify the state, like add new user, updating a user's status message, and adding a friend 

What I need in this? 
import createSlice, PayLoadAction, 
interface for User (id, name, pp,messgae, friends)
variable = interface for userState (initiazed to be empty) 

initialize createSlice(
    name of slice, 
    initialState, 
    reducers: {
        addUser (state, action with type PayLoadAction with type User => found user PUSHED onto list of users in the state)}), 

         setStatusMessage(state, action: payloadaction with type id, and a string message => find the user with the matching id from payload action, if user found update with message)

        addFriend(state, action:payLoadAction containing user id (num) + firend id(num) => const user = the person who is matching the id, if user not matching friends.id, then push her into firends array)
    
export createSlice.reduce and actions

 
 ---- authSlice.ts (centrally manages the state of the authentication)
 
What I need in this code? 
import createSlice, PayLoadAction, 
interface AuthState (isLoggedin, useID)
initialstate using AuthState interface, 

initializing createSlice({
    slice name, initialstate, reducers (

        login (if logged in, assign action payload to user ID)

        logout (if logged out, action payload is 0)
    )
})

export slice.reducer and actions

 ---- store.ts (source of truth for all states in the app)
 
 What I need in the code? 
 import configureStore, userreducer, authreducer

 create the actual store with configureStore
 reducers: user->userReducer, auth->authReducer


 
 */ 






