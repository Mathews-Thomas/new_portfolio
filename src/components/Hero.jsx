import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import heroImage from '../assets/img/hero.png';
import Resume from "../assets/img/My UpdatedResume.pdf";

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
              {Skills.map((i) => i)}
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
                target='blank'
                className="btn p-2 rounded-md bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-transparent hover:text-black dark:hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.9 }}
              >
                Download Cv
              </motion.a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Parallax y={[-20, 20]} tagOuter="figure">
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black dark:text-white"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83-.47-5.1-2.74-5.57-5.57H6v-2h1.43c.45-2.83 2.72-5.1 5.57-5.57V6h2v1.43c2.83.45 5.1 2.72 5.57 5.57H18v2h-1.43c-.45 2.83-2.72 5.1-5.57 5.57V18h-2v1.93zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5zm0 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                  fill="currentColor"
                />
              </svg>
            </Parallax>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Hero;
