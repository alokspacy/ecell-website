import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <>
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="z-50">
            <img src="/logot.png" alt="logo" className="h-16 w-16 md:h-19 md:w-19" />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="z-50 text-white uppercase font-bold flex items-center gap-2"
          >
            Menu
            <div className="space-y-1.5">
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-24 p-8">
          <ul className="space-y-6 text-xl text-gray-300">
            <li><NavLink to="/" onClick={closeMenu} className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/service" onClick={closeMenu} className="hover:text-white">Initiatives</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className="hover:text-white">Achievements</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className="hover:text-white">Contact</NavLink></li>
            <li><NavLink to="/team" onClick={closeMenu} className="hover:text-white transition-colors duration-300">Our Team</NavLink></li>
            {isLoggedIn ? (
             <>
                {user?.isAdmin && (
                <li><NavLink to="/admin" onClick={closeMenu} className="hover:text-white transition-colors duration-300">Dashboard</NavLink></li>
                )}
        
               {!user?.isAdmin && (
               <li><NavLink to="/profile" onClick={closeMenu} className="hover:text-white transition-colors duration-300">Profile</NavLink></li>
                )}

               <li><NavLink to="/logout" onClick={closeMenu} className="hover:text-white">Logout</NavLink></li>
             </>
             ) : (
              <>
                <li><NavLink to="/register" onClick={closeMenu} className="hover:text-white">Register</NavLink></li>
                <li><NavLink to="/login" onClick={closeMenu} className="hover:text-white">Login</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;