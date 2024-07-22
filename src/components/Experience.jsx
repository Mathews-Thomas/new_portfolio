import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { date: '2024 - present', title: 'Software Developer', company: 'Ophize, Kochi India', description: 'Developed software for multiple clients including Ophize, Kochi India.' },
  { date: '2022 - 2024', title: 'Mern Stack Intern', company: 'Aesthetix Edu-Tech, Kochi', description: 'Assisted in developing and maintaining web applications for various clients.' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      staggerChildren: 0.3
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6 
    } 
  }
};

const Experience = () => {
  return (
    <div className="experience py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-400" id="experience">
      <div className="container mx-auto px-6">
        <header className="section-header text-center mb-10">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-gray-200 dark:bg-gray-800 inline-block relative px-4 mb-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute inset-0 h-0.5 bg-gray-200 dark:bg-gray-800 top-1/2 left-0"></span>
            My Resume
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Working Experience
          </motion.h2>
        </header>
        <motion.div 
          className="timeline flex flex-col items-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="absolute w-1 bg-gray-300 dark:bg-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item flex flex-col md:flex-row items-center w-full md:w-1/2 p-4 mb-8 relative"
              variants={itemVariants}
            >
              <div className={`timeline-dot w-6 h-6 rounded-full bg-gray-600 dark:bg-gray-400 z-10 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
              <div className={`timeline-content bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                <h2 className="timeline-date text-gray-900 dark:text-white font-semibold tracking-wide uppercase text-lg mb-2">{exp.date}</h2>
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <h4 className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">{exp.company}</h4>
                <p className="text-base text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
