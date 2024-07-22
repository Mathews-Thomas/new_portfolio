import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import review1 from '../assets/img/testimonial-1.jpg';
import review2 from '../assets/img/testimonial-2.jpg';
import review3 from '../assets/img/testimonial-3.jpg';

const reviews = [
  {
    image: review1,
    text: "Working with this team was an absolute pleasure. They delivered the project on time and exceeded our expectations with their creativity and expertise.",
    name: "Michael Brown",
    profession: "CEO, Tech Innovators"
  },
  {
    image: review2,
    text: "Their attention to detail and commitment to excellence is unmatched. We were thoroughly impressed with the end product and their professionalism throughout the process.",
    name: "Sarah Wilson",
    profession: "Marketing Director, Creative Agency"
  },
  {
    image: review3,
    text: "The team demonstrated exceptional skills and knowledge in web development. Their solutions were innovative and they were always responsive to our needs.",
    name: "David Lee",
    profession: "CTO, Future Solutions"
  }
];

const Review = () => {
  return (
    <div className="testimonial py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-400" id="review">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.div 
            className="testimonial-icon mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <i className="fas fa-quote-left text-6xl text-gray-300 dark:text-gray-500"></i>
          </motion.div>
        </Parallax>
        <div className="flex flex-wrap justify-center">
          {reviews.map((review, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <motion.div 
                  className="testimonial-item bg-gray-100 dark:bg-gray-800 text-center shadow-lg p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="testimonial-img mx-auto mb-4 flex justify-center">
                    <img src={review.image} alt={`Review ${index + 1}`} className="w-24 h-24 rounded-full border-4 border-gray-300 dark:border-gray-400 p-2" />
                  </div>
                  <div className="testimonial-text">
                    <p className="text-md italic mb-4 text-gray-600 dark:text-gray-400">{review.text}</p>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">{review.name}</h3>
                    <h4 className="text-md text-gray-600 dark:text-gray-400">{review.profession}</h4>
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
