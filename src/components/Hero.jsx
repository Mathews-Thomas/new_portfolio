import React from 'react';
import heroImage from '../assets/img/hero.png';

const Hero = () => {
  return (
    <div 
      className="hero relative py-32 text-white bg-red-600 bg-cover bg-center" 
      id="home" 
      style={{ backgroundImage: `url('../assets/img/hero-bg.jpg')` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-2xl font-semibold">I'm</p>
          <h1 className="text-5xl font-bold mb-4">Mathews Thomas</h1>
          <h2 className="text-3xl font-semibold mb-4">
            Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer
          </h2>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a 
              href="#contact" 
              className="btn p-2 rounded-md bg-white text-red-600 border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Hire Me
            </a>
            <a 
              href="#contact" 
              className="btn p-2 rounded-md bg-white text-red-600 border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* <img src={heroImage} alt="Hero" className="max-w-full max-h-full" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
