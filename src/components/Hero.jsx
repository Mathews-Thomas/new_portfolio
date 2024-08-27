import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Resume from "../assets/img/MathewsResume.pdf";
import Herovideo from "../assets/videos/hero-bg.mp4";
import { useEffect, useState } from 'react';
const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const skills = [
    'Innovative Problem Solver',
    'Full Stack Web Developer',
    'UI/UX Enthusiast',
    'API Integrator',
    'Mobile App Developer'
  ];
  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 2000); // Delay loading the video by 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const renderSkills = () => (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="block text-lg md:text-xl font-semibold tracking-wider text-gray-300 dark:text-gray-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
        >
          {`{ ${skill} }`}
        </motion.span>
      ))}
    </div>
  );

  const renderButtons = () => {
    const buttons = [
      { href: '#services', label: 'Hire Me', delay: 1.5 },
      { href: '#contact', label: 'Contact Me', delay: 1.7 },
      { href: Resume, label: 'View Resume', delay: 1.9, target: '_blank' }
    ];

    return buttons.map((button, index) => (
      <motion.a
        key={index}
        href={button.href}
        target={button.target || '_self'}
        className="btn px-4 py-2 md:px-6 md:py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 font-bold shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: button.delay }}
      >
        {button.label}
      </motion.a>
    ));
  };

  return (
    <ParallaxProvider>
      <div className="hero relative min-h-screen flex flex-col justify-center items-center text-gray-900 dark:text-gray-300 bg-no-repeat" id="home">
        {/* Background Video */}
        {isVideoLoaded ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Herovideo}  type="video/mp4" />
        </video>) : null}

        {/* Overlay */}
        <div className="absolute inset-0  z-1"></div>
        {/* Content */}
        <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-12">
          <motion.p
            className="text-3xl md:text-4xl font-bold tracking-widest text-gray-300 dark:text-gray-300"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mt-4 mb-6 md:mb-8 text-gray-300 dark:text-gray-300"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mathews Thomas
          </motion.h1>
          <motion.div
            className="mb-8 md:mb-12 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {renderSkills()}
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 md:mt-10">
            {renderButtons()}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Hero;
