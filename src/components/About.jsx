import React from 'react';
import aboutImage from '../assets/img/about.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Web Design', percentage: 85 },
    { name: 'Web Development', percentage: 95 },
    { name: 'Apps Design', percentage: 90 },
    { name: 'Apps Development', percentage: 85 }
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({ 
      width: `${percentage}%`, 
      transition: { 
        duration: 1,
        ease: 'easeInOut'
      } 
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
    <div className="about py-20 bg-black text-white" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        <motion.div 
          className="w-full lg:w-1/2 p-4 mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img src={aboutImage} alt="About" className="w-full h-auto object-cover rounded-lg shadow-lg" />
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
              className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black"
              variants={textVariants}
            >
              <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
              Learn About Me
            </motion.p>
            <motion.h2 
              className="text-4xl font-bold"
              variants={textVariants}
            >
              1 Years Experience
            </motion.h2>
          </div>
          <motion.p 
            className="text-base mb-6"
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida.
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
                variants={skillVariants}
              >
                <div className="flex justify-between mb-1">
                  <motion.p variants={textVariants}>{skill.name}</motion.p>
                  <motion.p variants={textVariants}>{skill.percentage}%</motion.p>
                </div>
                <div className="w-full bg-gray-600 h-2 rounded-full">
                  <motion.div 
                    className="bg-white h-full rounded-full"
                    custom={skill.percentage}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={skillVariants}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.a 
            className="btn p-2 rounded-md bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300" 
            href="#contact"
            variants={textVariants}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
