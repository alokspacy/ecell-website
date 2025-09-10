import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import About from './About';
import Service from './Service';
import Team from './Team';
import Contact from './Contact';

const Home = () => {
  const handleScrollToNextSection = () => {
    const initiativesSection = document.getElementById('initiatives');
    if (initiativesSection) {
      initiativesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden"
        // The inline style for the background image has been removed from here
      >
        {/* New Responsive Image Tag */}
        <img 
          src="/images/ecell.png" 
          alt="E-Cell AITD Background" 
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        {/* Social Icons */}
        <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 flex-col space-y-5 z-20 hidden md:flex">
          <a href="https://www.facebook.com/ecell.aith/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors"><FaFacebookF size={22} /></a>
          <a href="https://x.com/isc_aith?s=09" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors"><FaTwitter size={22} /></a>
          <a href="https://www.linkedin.com/company/e-cell-aitd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors"><FaLinkedinIn size={22} /></a>
          <a href="https://www.instagram.com/ecell_aitd?igsh=MTNwZnBhYjhmM3loaQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors"><FaInstagram size={22} /></a>
        </div>

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <p className="font-semibold tracking-widest uppercase text-gray-300 mb-2 text-sm md:text-base">
            Idea. Leads TO. Innovation.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold my-4 leading-tight drop-shadow-lg">
            Entrepreneurship Cell <br />
            Dr.AITD Kanpur
          </h1>
          <button onClick={handleScrollToNextSection} className="mt-8 border-2 border-white px-10 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 rounded-full shadow-lg">
            Explore
          </button>
        </div>
        
        {/* SCROLL DOWN INDICATOR */}
        <div 
          onClick={handleScrollToNextSection}
          className="absolute bottom-5 right-5 md:bottom-10 md:right-10 flex items-center space-x-2 text-white cursor-pointer scroll-indicator"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="font-semibold tracking-widest uppercase">Scroll Down</span>
          <svg className="w-5 h-5 transform -rotate-90 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>
      
      <Service />
      <Team />
      <About />
      <Contact />
    </main>
  );
};

export default Home;