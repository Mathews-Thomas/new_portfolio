import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import heroImage from '../assets/img/hero.png';

const Hero = () => {
  return (
    <ParallaxProvider>
      <div 
        className="hero relative py-32 text-white bg-black bg-cover bg-center" 
        id="home" 
        style={{ backgroundImage: `url('../assets/img/hero-bg.jpg')` }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <motion.p 
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              I'm
            </motion.p>
            <motion.h1 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Mathews Thomas
            </motion.h1>
            <motion.h2 
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer
            </motion.h2>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <motion.a 
                href="#contact" 
                className="btn p-2 rounded-md bg-white text-black border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Hire Me
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn p-2 rounded-md bg-white text-black border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
              >
                Contact Me
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
                className="text-white"
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
