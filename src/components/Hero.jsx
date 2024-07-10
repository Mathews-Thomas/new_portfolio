import React from 'react';
import heroImage from '../assets/img/hero.png';

const Hero = () => {
  return (
    <div 
      className="hero relative py-32 text-white bg-black bg-cover bg-center" 
      id="home" 
      style={{ backgroundImage: `url('../assets/img/hero-bg.jpg')` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-2xl font-semibold">I'm</p>
          <h1 className="text-5xl font-bold mb-4">Mathews Thomas</h1>
          <h2 className="text-xl font-semibold mb-4">
            Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer
          </h2>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a 
              href="#contact" 
              className="btn p-2 rounded-md bg-white text-black border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Hire Me
            </a>
            <a 
              href="#contact" 
              className="btn p-2 rounded-md bg-white text-black border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* <img src={heroImage} alt="Hero" className="max-w-full max-h-full" /> */}
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
