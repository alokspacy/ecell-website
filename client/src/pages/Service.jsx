import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <section id="initiatives" className="py-24"
    style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/bg1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Our Initiatives</h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services && services.length > 0 ? (
              services.map((curElem, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
                >
                  <img
                    src={`/initiatives/${curElem.image}`}
                    alt={curElem.service}
                    className="h-80 w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-left transform transition-all duration-500 ease-in-out translate-y-1/2 group-hover:translate-y-0">
                    <h2 className="text-lg md:text-xl font-bold text-white mb-2">{curElem.service}</h2>
                    <div className="transform transition-all duration-500 ease-in-out opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto">
                      <p className="text-gray-300 text-xs md:text-sm">{curElem.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">No services available.</p>
            )}
          </div>
        </div>

        {/* Faculty Coordinator Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Faculty Co-ordinator
            </h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* UPDATED RESPONSIVE CARD */}
          <div className="bg-gray-900 rounded-2xl shadow-xl max-w-3xl mx-auto p-8 text-center md:text-left md:flex md:items-center md:gap-8">
            <div className="flex-shrink-0">
              <img
                src="/initiatives/rohit.jpg"
                alt="Dr. Rohit Sharma"
                className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto md:w-56 md:h-auto md:rounded-2xl"
              />
            </div>
            <div className="mt-6 md:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dr. Rohit Sharma</h2>
              <h3 className="text-md sm:text-lg font-semibold text-orange-400 mb-4">
                Assistant Professor, CS & Eng.
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
                We are honored to introduce Dr. Rohit Sharma, a distinguished faculty member 
                at DR.AITH Kanpur, where he serves as the Assistant Professor in the Computer 
                Science & Engineering Department.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;