import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import portfolio1 from '../assets/img/portfolio-1.jpg';
import portfolio2 from '../assets/img/portfolio-2.jpg';
import portfolio3 from '../assets/img/portfolio-3.jpg';
import portfolio4 from '../assets/img/portfolio-4.jpg';
import portfolio5 from '../assets/img/portfolio-5.jpg';
import portfolio6 from '../assets/img/portfolio-6.jpg';

const portfolioItems = [
  { image: portfolio1, title: 'E-commerce Website', description: 'Developed an e-commerce platform with seamless user experience.' },
  { image: portfolio2, title: 'Mobile Banking App', description: 'Created a secure and user-friendly mobile banking application.' },
  { image: portfolio3, title: 'Social Media Dashboard', description: 'Designed an interactive dashboard for managing social media accounts.' },
  { image: portfolio4, title: 'Travel Booking Website', description: 'Built a comprehensive website for booking travel packages and flights.' },
  { image: portfolio5, title: 'Fitness Tracking App', description: 'Developed a mobile app for tracking fitness activities and goals.' },
  { image: portfolio6, title: 'Educational Game', description: 'Created an engaging and educational game for children.' },
];

const Portfolio = () => {
  return (
    <div className="portfolio py-20 bg-black text-white" id="portfolio">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
            My Portfolio
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My Excellent Portfolio
          </motion.h2>
        </Parallax>
        <ul className="flex flex-wrap justify-center mb-8">
          {['All', 'Web Design', 'Mobile Apps', 'Game Dev'].map((filter, index) => (
            <motion.li 
              key={index}
              className="cursor-pointer inline-block mx-2 my-1 py-2 px-4 bg-gray-700 text-white border-2 border-transparent shadow-inner hover:text-gray-700 hover:bg-transparent hover:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
            >
              {filter}
            </motion.li>
          ))}
        </ul>
        <div className="flex flex-wrap -mx-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <motion.div 
                  className="portfolio-item relative group overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                  <div className="portfolio-text absolute bottom-0 left-0 w-full bg-gray-800 p-4 shadow-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
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

export default Portfolio;
