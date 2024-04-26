import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/login", { userId, password }); // Replace "/api/login" with your actual login endpoint
            const { token } = response.data; // Assuming response data has a "token" property

            localStorage.setItem("jwtToken", token); // Store token in localStorage (consider a more secure alternative)
            navigate("/dashboard"); // Redirect to dashboard on successful login
        } catch (error) {
            console.error(error);
            // Handle login errors (e.g., display error message)
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col items-center justify-center px-16 ">
        <form className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
            <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md py-2 px-4 focus:outline-none"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src="images/authimg.jpg" alt="auth" className="w-90 h-84" />
      </div>
    </div>
    );
}

export default LoginPage;

