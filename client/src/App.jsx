import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Team from "./pages/Team"; // 1. Import the Team component
import Admin_Layout from "./components/layouts/Admin_Layout";
import Admin_Users from "./pages/Admin_Users";
import Admin_Contacts from "./pages/Admin_Contacts";
import Admin_Update from "./pages/Admin_Update";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} /> {/* 2. Add the route for the Team page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin_Layout />}>
          <Route path="users" element={<Admin_Users />} />
          <Route path="users/:id/edit" element={<Admin_Update />} />
          <Route path="contacts" element={<Admin_Contacts />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;