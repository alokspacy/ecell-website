import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login successful");

        // Redirect based on admin status
        if (res_data.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black p-4 pt-24">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-400">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="text-gray-400 font-medium mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              value={user.email}
              onChange={handleInput}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-400 font-medium mb-2 block">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
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
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

