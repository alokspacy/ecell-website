import React from 'react';

// Combined list of all team members and mentors
const allMembers = [
    { name: 'Ansh Sharma', role: 'Innovation Coordinator', image: 'ansh.png' },
    { name: 'Manu Omar', role: 'President', image: 'manu.png' },
    { name: 'Ankit Yadav', role: 'Event Manager', image: 'ankit.png' },
    { name: 'Abhay Tiwari', role: 'ISC Head & Mentor', image: 'abhay.png' },
    { name: 'Zakiya Khan', role: 'PR Head', image: 'zakiya.png' },
    { name: 'Sakshi Chaudhary', role: 'Operation Head', image: 'sakshi.png' },
    { name: 'Charu Awasthi', role: 'Content Head', image: 'charu.png' },
    { name: 'Alok Singh', role: 'Tech & Research Head', image: 'alok.png' },
    { name: 'Harshit Dubey', role: 'Co-Head ISC', image: 'harshit.png' },
    { name: 'Rishabh Kumar', role: 'Graphics Head', image: 'rishabh.png' },
    { name: 'Archit Patel', role: 'Social Media Head', image: 'archit.png' },
    { name: 'Vishwas', role: 'Sponsor Head', image: 'vishwas.png' },
    { name: 'Nitesh Pal', role: 'NEC Lead', image: 'nitesh.png' },
    { name: 'Ankit Kumar', role: 'Mentor', image: 'ankitk.png' },
    { name: 'Rakesh', role: 'Mentor', image: 'rakesh.png' },
    { name: 'Satyam Pandey', role: 'Mentor', image: 'satyam.png' },
];

const Team = () => {
  return (
    <section id="team" className="py-24"
    style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/bg1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="container mx-auto">
        
        <div className="text-center mb-20">
          <p className="text-gray-400 uppercase tracking-wider">Meet the Crew</p>
          <h1 className="text-5xl font-extrabold text-white mt-2">Our Team</h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            The driving force and experienced minds behind our initiatives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-16 sm:gap-y-20">
          {allMembers.map((member, index) => (
            // The container and image sizes now adjust for mobile screens
            <div key={index} className="w-32 sm:w-40 text-center group">
              <div className="relative card-border rounded-full p-1 transform transition-transform duration-300 group-hover:scale-110">
                <img
                  src={`/team/${member.image}`}
                  alt={member.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full z-10"
                />
              </div>
              
              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gray-400 mt-1 text-xs sm:text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
