import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const experiences = [
  { date: '2024 - present', title: 'Software Developer', company: 'Ophize, Kochi India', description: 'Developed software for multiple clients including Ophize, Kochi India.' },
  { date: '2022 - 2024', title: 'Junior Developer', company: 'Tech Solutions, Bangalore India', description: 'Assisted in developing and maintaining web applications for various clients.' },
  { date: '2020 - 2022', title: 'Intern', company: 'InnovateX, Chennai India', description: 'Worked on several projects, gaining experience in full-stack development and collaborating with senior developers.' },
];

const experienceVariants = {
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

const Experience = () => {
  return (
    <div className="experience py-20 bg-black text-white" id="experience">
      <div className="container mx-auto px-6">
        <header className="section-header text-center mb-10">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
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
        <div className="timeline relative before:absolute before:content-[''] before:w-1 before:bg-gray-500 before:top-0 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`timeline-item w-full md:w-1/2 p-4 relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={experienceVariants}
            >
              <Parallax y={[-20, 20]} tagOuter="div">
                <div className={`timeline-text bg-gray-800 shadow-lg p-6 rounded-lg relative ${index % 2 === 0 ? 'md:right-auto' : 'md:left-auto'} md:w-3/4`}>
                  <span className={`absolute w-3 h-3 bg-gray-500 top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-[-0.75rem]' : 'left-[-0.75rem]'} rounded-full`}></span>
                  <h2 className="timeline-date text-white font-semibold tracking-wide uppercase text-lg mb-4">{exp.date}</h2>
                  <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                  <h4 className="text-lg italic mb-4">{exp.company}</h4>
                  <p className="text-base text-gray-400">{exp.description}</p>
                </div>
              </Parallax>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
