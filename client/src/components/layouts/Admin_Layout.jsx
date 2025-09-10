import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUserFriends, FaEnvelope, FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth.jsx";

const Admin_Layout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white"><h1>Loading...</h1></div>;
  }

  if (!user || !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 hidden md:block">
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-gray-800"
                  }`
                }
              >
                <FaUserFriends className="text-xl" />
                <span className="font-semibold">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contacts"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-gray-800"
                  }`
                }
              >
                <FaEnvelope className="text-xl" />
                <span className="font-semibold">Contacts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <FaHome className="text-xl" />
                <span className="font-semibold">Home</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin_Layout;

