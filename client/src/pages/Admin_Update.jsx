import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin_Update = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const { authorizationToken, API } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setData(userData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("User updated successfully");
        navigate("/admin/users");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 md:p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Update User Data</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={handleInput}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleInput}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={handleInput}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin_Update;