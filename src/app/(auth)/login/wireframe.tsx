TODO: {}

/* 
------- 1. State Management -------
userId: Stores the user's ID input.
userName: Stores the user's name input.
profilePicture: Stores the URL of the user's profile picture input.
statusMessage: Stores the user's status message input.
isLogin: Boolean state to toggle between the Login form and Sign-Up form.
generatedUserId: Stores the randomly generated user ID after a successful sign-up.
currentUserId: Fetches the current logged-in user ID from the Redux store.


------- 2. Event Handlers -------
- handleLogin:
    + converts userId to a number.
    + dispatches the login action with the user ID if it is valid.
- handleSignUp:
     + Generates a random user ID.
     + Dispatches the addUser action with the user's name, profile picture (or default), and status message (or default).
     + Stores the generated ID in the generatedUserId state.


------- 3. Conditional Rendering -------
-isLogin:
true: Displays the Login form.
false: Displays the Sign-Up form.

------- 4. JSX Structure -------
- Main Container 
- Content Wrapper 
- Card Wrapper 

- Conditional Rendering for Login and Sign-Up Forms:
If isLogin is true:
       -> Login Form:
           +Input for userId
           +Login Button (handleLogin is triggered on click)

If isLogin is false:
        -> Sign-Up Form:
            +Input for userName
            +Input for profilePicture
            +Input for statusMessage
            +Sign-Up Button (handleSignUp is triggered on click)
            + displaying generatedUserId if available

If currentUserId exists and isLogin is true:
- Display a message showing the logged-in user's ID.

------- 5. State Transitions -------
Switch to Sign-Up: Clicking the Sign-Up link sets isLogin to false.
Switch to Login: Clicking the Login link sets isLogin to true.
Successful Sign-Up: The generated user ID is displayed in the UI after the Sign-Up process.
6. Redux Integration
useDispatch: Used to dispatch the login and addUser actions.
useSelector: Used to access currentUserId from the Redux store.

*/