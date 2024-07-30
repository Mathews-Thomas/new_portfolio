import React from 'react';
import aboutImage from '../assets/img/about.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Web Design', percentage: 85 },
    { name: 'Web Development', percentage: 95 },
    { name: 'Apps Design', percentage: 90 },
    { name: 'Apps Development', percentage: 85 },
    { name: 'MERN Stack', percentage: 90 }
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8 
      } 
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1, ease: 'easeInOut' }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5 
      } 
    }
  };

  return (
    <div className="about py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-300" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        <motion.div 
          className="w-full lg:w-1/2 p-4 mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <motion.img 
            src={aboutImage} 
            alt="About" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="section-header mb-6">
            <motion.p 
              className="text-lg uppercase tracking-wide bg-white dark:bg-gray-800 inline-block relative px-4 mb-4 text-black dark:text-gray-400"
              variants={textVariants}
            >
              <span className="absolute inset-0 h-0.5 bg-white dark:bg-gray-800 top-1/2 left-0"></span>
              Learn About Me
            </motion.p>
            <motion.h2 
              className="text-4xl font-bold"
              variants={textVariants}
            >
              1 Year Experience
            </motion.h2>
          </div>
          <motion.p 
            className="text-md mb-6 font-semibold"
            variants={textVariants}
          >
            I am a passionate full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). Over the past year, I have worked on various projects, building dynamic and responsive web applications. I love tackling complex problems and coming up with efficient solutions.
          </motion.p>
          <motion.p 
            className="text-md mb-6 font-semibold"
            variants={textVariants}
          >
            I have a strong background in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills. My goal is to build scalable and maintainable applications that provide great user experiences.
          </motion.p>
          <div className="skills mb-6">
            {skills.map(skill => (
              <motion.div 
                key={skill.name} 
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={skill.percentage}
                variants={containerVariants}
              >
                <div className="flex justify-between mb-1">
                  <motion.p variants={textVariants}>{skill.name}</motion.p>
                  <motion.p variants={textVariants}>{skill.percentage}%</motion.p>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-600 h-2 rounded-full">
                  <motion.div 
                    className="bg-black dark:bg-gray-400 h-full rounded-full"
                    custom={skill.percentage}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={skillBarVariants}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.a 
            className="btn p-2 rounded-md bg-black dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white dark:text-gray-300 hover:text-gray-900 border border-gray-700 dark:border-gray-600 transition-all duration-300" 
            href="#contact"
            variants={textVariants}
          >
            More
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
