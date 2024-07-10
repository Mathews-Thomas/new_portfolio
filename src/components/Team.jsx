import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
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
    <div className="team py-20 bg-black text-white" id="team">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
            My Team
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Expert Team Members
          </motion.h2>
        </Parallax>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <motion.div 
                  className="team-item bg-gray-800 shadow-lg p-6 rounded-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="team-img overflow-hidden rounded-full mb-4">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="team-text">
                    <h2 className="text-xl font-bold text-white mb-2">{member.name}</h2>
                    <h4 className="text-lg font-semibold mb-4">{member.role}</h4>
                    <p className="text-base mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit tincidunt.</p>
                    <div className="team-social flex justify-center space-x-2">
                      <a href="#" className="bg-gray-400 text-black p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white border border-gray-400"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="bg-gray-400 text-black p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white border border-gray-400"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" className="bg-gray-400 text-black p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white border border-gray-400"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#" className="bg-gray-400 text-black p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white border border-gray-400"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </motion.div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
