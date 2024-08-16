"use client"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "../../../redux/authSlice";
import { addUser } from "../../../redux/userSlice";
import store, { RootState } from "../../../redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Navbar from "@/components/navbar";

const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusImage, setStatusImage] = useState(""); // New state for statusImage
  const [isLogin, setIsLogin] = useState(true);
  const [generatedUserId, setGeneratedUserId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUserId = useSelector(
    (state: RootState) => state.auth.currentUserId
  );

  useEffect(() => {
    if (currentUserId) {
      console.log("Redirecting to user profile page:", `/user/${currentUserId}`);
      router.push(`/user/${currentUserId}`);
    }
  }, [currentUserId, router]);

  const handleLogin = () => {
    const id = parseInt(userId);
    const userExists = store.getState().user.users.find((user) => user.id === id);
    
    if (!isNaN(id) && userExists) {
      dispatch(login(id));
      const state = store.getState();
      console.log("User Exists, Current User ID:", state.auth.currentUserId);
      console.log("All Users in Store:", state.user.users);
    } else {
      console.error("User does not exist or invalid ID entered.");
      alert("User does not exist. Please enter a valid User ID or sign up.");
    }
  };

  const handleSignUp = () => {
    const id = Math.floor(Math.random() * 1000000);
    if (userName) {
      setGeneratedUserId(id);
      dispatch(
        addUser({
          id,
          name: userName,
          profilePicture: profilePicture || "https://via.placeholder.com/150",
          statusMessage: statusMessage || "Hello! I'm new here.",
          statusImage: statusImage || "https://via.placeholder.com/150", // New field for statusImage
          friends: [],
        })
      );
      setTimeout(() => {
        setIsLogin(true);
        setUserId(id.toString());
      }, 3000);
    }
  };

  return (
    <div className="login-page">
      <div className="main-content">
        <div className="card card-custom">
          {isLogin ? (
            <>
              <h3 className="text-center mb-4 card-title">Login</h3>
              <p className="text-center card-text">Please enter your User ID</p>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Enter User ID.."
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="form-control form-control-lg input-custom"
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button onClick={handleLogin} className="button-custom">
                  LOGIN
                </button>
              </div>
              <p className="text-center mt-4 card-text">
                Don't have an account?{" "}
                <a
                  href="#!"
                  onClick={() => setIsLogin(false)}
                  className="link-custom"
                >
                  Sign Up
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="text-center mb-4 card-title">SIGN UP</h3>
              <p className="text-center card-text">Please fill in your details!</p>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control form-control-lg input-custom"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Profile Picture URL"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  className="form-control form-control-lg input-custom"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Status Message"
                  value={statusMessage}
                  onChange={(e) => setStatusMessage(e.target.value)}
                  className="form-control form-control-lg input-custom"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Status Image URL" // New input field for statusImage
                  value={statusImage}
                  onChange={(e) => setStatusImage(e.target.value)}
                  className="form-control form-control-lg input-custom"
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button onClick={handleSignUp} className="button-custom">
                  REGISTER
                </button>
              </div>
              {generatedUserId && (
                <div className="alert alert-info mt-4" role="alert">
                  Your account has been created! Your User ID is: {generatedUserId}
                </div>
              )}
              <p className="text-center mt-4 card-text">
                Already have an account?{" "}
                <a
                  href="#!"
                  onClick={() => setIsLogin(true)}
                  className="link-custom"
                >
                  Login
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
