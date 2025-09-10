import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24"
    style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/bg1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider">Witness the Awesomeness</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">Gallery</h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            E-Cell brings to its participants a host of events, ranging from immersive
            talks to exciting competitions!
          </p>
        </div>
        
        {/* Constrained container for a tighter look */}
        <div className="max-w-5xl mx-auto">
          {/* 2 columns on mobile, 3 on large screens for an "album" feel */}
          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            <div className="overflow-hidden rounded-lg">
              <img src="/gallery/one.jpg" alt="Gallery Image 1" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/gallery/5.jpg" alt="Gallery Image 2" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/gallery/7.jpg" alt="Gallery Image 3" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/gallery/9.jpg" alt="Gallery Image 4" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/gallery/13.jpg" alt="Gallery Image 5" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/gallery/18.jpg" alt="Gallery Image 6" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;