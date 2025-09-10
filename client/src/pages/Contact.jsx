import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const { user, API } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({ ...contact, message: "" });
        toast.success("Message sent successfully");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  return (
    // Add the id="contact" for scrolling
    <section id="contact" className="py-24"
    style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/bg1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Send Us A Message
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Contact Image - hidden on smaller screens for a better mobile experience */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <img
              src="/images/contact.png"
              alt="Contact illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your username"
                  required
                  value={contact.username}
                  onChange={handleInput}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={contact.email}
                  onChange={handleInput}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  value={contact.message}
                  onChange={handleInput}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.5631469379623!2d80.27386157488085!3d26.502007077620828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c382405555555%3A0xc56ecc1df489e865!2sDr.%20Ambedkar%20Institute%20of%20Technology%20for%20Divyangjan!5e0!3m2!1sen!2sin!4v1725972535535!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;