import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion';
import LiveChat from './components/LiveChat'; // Import the LiveChat component

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ParallaxProvider>
      <AnimatePresence>
        <div className={`transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
          <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Hero />
          <About />
          <Service />
          <Experience />
          <Portfolio />
          <Price />
          <Contact />
          <Footer />
          <LiveChat />
        </div>
      </AnimatePresence>
    </ParallaxProvider>
  );
}

export default App;
