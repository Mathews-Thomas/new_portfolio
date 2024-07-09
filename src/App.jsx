// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Experience from './components/Experience';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Price from './components/Price';
import Review from './components/Review';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Banner />
      <Portfolio />
      <Price />
      <Review />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
