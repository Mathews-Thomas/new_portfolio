// src/components/Hero.jsx
import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Resume from "../assets/img/MathewsResume.pdf";
import Logo3D from './Logo3D';

const Hero = () => {
  const Skills = [' { Software Developer } ', ' { Web Developer } ', ' { Front End Developer } ', ' { Back End Developer } ', ' { Apps Developer } '];

  return (
    <ParallaxProvider>
      <div
        className="hero relative py-32 text-gray-900 dark:text-gray-400 bg-white dark:bg-gray-900 bg-cover bg-center"
        id="home"
        style={{ backgroundImage: `url('../assets/img/hero-bg.jpg')` }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <motion.p
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="md:text-6xl text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Mathews Thomas
            </motion.h1>
            <motion.h2
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {Skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </motion.h2>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <motion.a
                href="#contact"
                className="btn p-2 rounded-md bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-transparent hover:text-black dark:hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#contact"
                className="btn p-2 rounded-md bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-transparent hover:text-black dark:hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href={Resume}
                target="_blank"
                className="btn p-2 rounded-md bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-transparent hover:text-black dark:hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.9 }}
              >
                Download Cv
              </motion.a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
            <Parallax y={[-30, 30]} tagOuter="figure" >
              <Logo3D  />
            </Parallax>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Hero;
