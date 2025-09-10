import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, authorizationToken, API, userAuthentication } = useAuth();
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        phone: '',
        domain: '',
        branch: '',
        year: '',
    });

    useEffect(() => {
        if (user) {
            setProfileData({
                username: user.username,
                email: user.email,
                phone: user.phone,
                domain: user.domain || '',
                branch: user.branch || '',
                year: user.year || '',
            });
        }
    }, [user]);

    const handleInput = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/user/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(profileData),
            });

            if (response.ok) {
                toast.success('Profile updated successfully!');
                userAuthentication(); // Re-fetch user data to update the context
            } else {
                toast.error('Failed to update profile.');
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred.');
        }
    };

    if (!user) {
        return <p>Loading...</p> // Or a spinner component
    }

    return (
        <section className="bg-black text-white min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Your Profile</h1>
                </div>
                <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                            <input type="text" name="username" value={profileData.username} onChange={handleInput} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" name="email" value={profileData.email} disabled className="w-full p-3 rounded-lg bg-gray-800 text-gray-400 border border-gray-700 cursor-not-allowed" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Domain</label>
                            <input type="text" name="domain" placeholder="e.g., Web Development" value={profileData.domain} onChange={handleInput} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Branch</label>
                            <input type="text" name="branch" placeholder="e.g., Computer Science" value={profileData.branch} onChange={handleInput} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Year</label>
                            <input type="text" name="year" placeholder="e.g., 2nd Year" value={profileData.year} onChange={handleInput} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Profile;