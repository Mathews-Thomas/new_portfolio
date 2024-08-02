import React, { useEffect } from 'react';
import ParallaxLayer from './ParallaxLayer';
import { gsap, ScrollTrigger } from 'gsap/all';

import bgImage from '../assets/img/wallpaperflare.com_wallpaper-3.jpg';
import fog1Image from '../assets/img/emile-guillemot-K5TxOEJ0GOw-unsplash.jpg';
// Import other images similarly

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = () => {
  useEffect(() => {
    gsap.to('.bg-img', { y: -200, scrollTrigger: { scrub: 1 } });
    gsap.to('.fog-1', { y: -150, scrollTrigger: { scrub: 1 } });
    // Add similar animations for other layers
  }, []);

  return (
    <div className="parallax-container relative h-screen overflow-hidden">
      <ParallaxLayer className="bg-img" image={bgImage} />
      <ParallaxLayer className="fog-1" image={fog1Image} />
      {/* Add other ParallaxLayer components similarly */}
    </div>
  );
};

export default ParallaxContainer;
