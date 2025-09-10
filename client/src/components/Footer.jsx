import React from "react";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-400 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Navigation */}
        <div>
          <h3 className="font-bold text-white mb-4 tracking-wider">E-CELL, DR.AITD KANPUR.</h3>
          <ul className="space-y-2">
            <li><button onClick={() => handleScroll('initiatives')} className="hover:text-white transition-colors duration-300">Initiatives</button></li>
            <li><button onClick={() => handleScroll('about')} className="hover:text-white transition-colors duration-300">Gallery</button></li>
            <li><button onClick={() => handleScroll('team')} className="hover:text-white transition-colors duration-300">Our Team</button></li>
          </ul>
        </div>

        {/* Column 2: Social Media */}
        <div>
          <h3 className="font-bold text-white mb-4 tracking-wider">FOLLOW US.</h3>
          <ul className="space-y-2">
            <li><a href="https://www.linkedin.com/company/e-cell-aitd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/ecell_aitd?igsh=MTNwZnBhYjhmM3loaQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a></li>
            <li><a href="https://x.com/isc_aith?s=09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">X (Twitter)</a></li>
            <li><a href="https://www.facebook.com/ecell.aith/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Facebook</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="font-bold text-white mb-4 tracking-wider">GET NOTIFIED.</h3>
          <p className="mb-4">Be the first to know about the activities of E-Cell.</p>
          <form className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="type email"
              className="bg-gray-800 text-white px-4 py-2 focus:outline-none w-2/3 border border-gray-700 focus:border-orange-500 rounded-l-md transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transform transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">&#9993;</span>
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p>
          <span className="text-gray-400">With love from</span>{' '}
          <span className="text-white font-semibold">E-Cell, Dr.AITD Kanpur</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;