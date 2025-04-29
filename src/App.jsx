import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({ userData })) : dispatch(logout());
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? 
  (
  <div className="bg-gray-800 w-screen h-screen ">
    <h1 className="text-amber-500 text-9xl">Blog App Using AppWrite</h1>
  </div>
  ) 

  : 

  (
    <div>
      // will show the loading animation
    </div>
  );
  
}

export default App;
