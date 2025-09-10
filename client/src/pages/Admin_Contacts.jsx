import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Admin_Contacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactData();
        toast.success("Message deleted successfully");
      } else {
        toast.error("Failed to delete message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactData.length > 0 ? (
          contactData.map((curContact, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{curContact.username}</p>
                <p className="text-sm text-gray-400">{curContact.email}</p>
                <p className="mt-4 text-gray-300 whitespace-pre-wrap">{curContact.message}</p>
              </div>
              <button
                onClick={() => deleteContactById(curContact._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors self-start"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">No contact messages found.</p>
        )}
      </div>
    </div>
  );
};

export default Admin_Contacts;