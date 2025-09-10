import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", phone: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black p-4 pt-24">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-400">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-400 font-medium mb-2 block">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              required
              value={user.username}
              onChange={handleInput}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="text-gray-400 font-medium mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={user.email}
              onChange={handleInput}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="text-gray-400 font-medium mb-2 block">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your Phone number"
              required
              value={user.phone}
              onChange={handleInput}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="text-gray-400 font-medium mb-2 block">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              value={user.password}
              onChange={handleInput}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 mt-4 font-bold"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;