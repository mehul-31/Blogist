import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import './loader.css';  // <-- Path depending on where your App.jsx is


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
    <div className="bg-gray-800 w-screen h-screen flex items-center justify-center">
      <h1 className="text-amber-500 text-5xl md:text-7xl lg:text-9xl font-bold text-center">
        Blog App Using AppWrite
      </h1>
    </div>
  ) 
  : 
  
(
  <div className="flex items-center justify-center bg-gray-900 w-screen h-screen">
    <div className="relative w-28 flex justify-between">
      {/* Left Eye */}
      <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
        <div className="w-7 h-7 bg-black rounded-full animate-eyeMove"></div>
      </div>

      {/* Right Eye */}
      <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
        <div className="w-7 h-7 bg-black rounded-full animate-eyeMove"></div>
      </div>
    </div>
  </div>
)

}

export default App;
