import React from 'react';
import { useAuth } from '../store/auth.jsx';
import { NavLink } from 'react-router-dom';

const Admin_Welcome = () => {
  const { user } = useAuth();

  // A check to ensure user data is available before rendering
  if (!user) {
    return (
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Loading user data...</h1>
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg mb-8">
        <h1 className="text-4xl font-bold">Welcome, <span className="text-orange-400">{user.username}</span>!</h1>
        <p className="text-gray-400 mt-2">This is your admin management panel. From here, you can manage users and view contact messages.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <p className="text-gray-400 mb-6">View, edit, or delete registered users on your platform.</p>
          <NavLink to="/admin/users" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Manage Users
          </NavLink>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
          <p className="text-gray-400 mb-6">Read and manage messages submitted through the contact form.</p>
          <NavLink to="/admin/contacts" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
            View Contacts
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Admin_Welcome;