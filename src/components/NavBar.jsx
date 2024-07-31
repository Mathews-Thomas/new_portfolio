import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from '../assets/img/logo.png';
const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-2xl font-bold text-black dark:text-white">
        <img src= {Logo} alt="Dp" className="w-10 h-10 rounded-full shadow-2xl  dark:bg-gray-400 bg-white" style={{ objectFit: 'cover' }}/>
        </a>
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
          {["home", "about", "service", "experience", "portfolio", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              className="text-xl py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-4">
            {["home", "about", "service", "experience", "portfolio", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                className="text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors cursor-pointer px-2 py-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
        <button
            onClick={toggleDarkMode}
            className="md:block hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
      </div>
    </nav>
  );
};

export default NavBar;
