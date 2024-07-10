import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="banner bg-black text-white py-20">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Reasonable Price
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Get A <span className="text-gray-300">Special</span> Price
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
          </motion.p>
          <motion.a 
            className="btn bg-white text-black px-8 py-3 rounded-full mt-8 inline-block transition duration-300 hover:bg-gray-700 hover:text-white"
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Pricing Plan
          </motion.a>
        </Parallax>
      </div>
    </div>
  );
}

export default Banner;
