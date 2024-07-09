import React from 'react';
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';

const teamMembers = [
  { name: 'Mollie Ross', role: 'Web Designer', image: team1 },
  { name: 'Dylan Adams', role: 'Web Developer', image: team2 },
  { name: 'Jennifer Page', role: 'Apps Designer', image: team3 },
  { name: 'Josh Dunn', role: 'Apps Developer', image: team4 }
];

const Team = () => {
  return (
    <div className="team py-20 bg-gray-100" id="team">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4">
          <span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 left-0"></span>
          My Team
        </p>
        <h2 className="text-4xl font-bold mb-10">Expert Team Members</h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="team-item bg-white shadow-lg p-6 rounded-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
                <div className="team-img overflow-hidden rounded-full mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="team-text">
                  <h2 className="text-xl font-bold text-red-600 mb-2">{member.name}</h2>
                  <h4 className="text-lg font-semibold mb-4">{member.role}</h4>
                  <p className="text-base mb-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit tincidunt.</p>
                  <div className="team-social flex justify-center space-x-2">
                    <a href="#" className="bg-red-600 text-white p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-red-600 border border-red-600"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="bg-red-600 text-white p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-red-600 border border-red-600"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="bg-red-600 text-white p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-red-600 border border-red-600"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="bg-red-600 text-white p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-red-600 border border-red-600"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
