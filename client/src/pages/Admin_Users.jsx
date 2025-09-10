import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Admin_Users = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if(response.ok) {
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        toast.success("User deleted successfully");
        getAllUserData();
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-white">Admin Users Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => (
              <tr key={index} className="border-t border-gray-700 hover:bg-gray-700/50">
                <td className="py-3 px-4">{curUser.username}</td>
                <td className="py-3 px-4">{curUser.email}</td>
                <td className="py-3 px-4">{curUser.phone}</td>
                <td className="py-3 px-4 flex justify-center items-center gap-2">
                  <Link
                    to={`/admin/users/${curUser._id}/edit`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(curUser._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin_Users;