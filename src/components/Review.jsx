import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import review1 from '../assets/img/testimonial-1.jpg';
import review2 from '../assets/img/testimonial-2.jpg';
import review3 from '../assets/img/testimonial-3.jpg';

const Review = () => {
  return (
    <div className="testimonial py-20 bg-black text-white" id="review">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.div 
            className="testimonial-icon mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <i className="fas fa-quote-left text-6xl"></i>
          </motion.div>
        </Parallax>
        <div className="flex flex-wrap justify-center">
          {[review1, review2, review3].map((review, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <motion.div 
                  className="testimonial-item bg-gray-800 text-center shadow-lg p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="testimonial-img mx-auto mb-4 flex justify-center">
                    <img src={review} alt={`Review ${index + 1}`} className="w-24 h-24 rounded-full border-4 border-dotted border-gray-400 p-2" />
                  </div>
                  <div className="testimonial-text">
                    <p className="text-xl italic mb-4 text-gray-400">Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.</p>
                    <h3 className="text-2xl font-bold text-white mb-2">Customer Name</h3>
                    <h4 className="text-lg text-gray-400">Profession</h4>
                  </div>
                </motion.div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
