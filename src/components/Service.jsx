import React from 'react';
import { FaLaptop, FaLaptopCode, FaAndroid, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

// Array of services with icons, titles, and descriptions
const services = [
  { icon: <FaLaptop />, title: 'Web Design', description: 'Creating visually appealing and user-friendly web designs.' },
  { icon: <FaLaptopCode />, title: 'Web Development', description: 'Building responsive and dynamic websites using the latest technologies.' },
  { icon: <FaAndroid />, title: 'Apps Design', description: 'Designing intuitive and engaging mobile app interfaces for Android.' },
  { icon: <FaApple />, title: 'Apps Development', description: 'Developing high-performance mobile applications for iOS.' }
];

// Animation variants for service items
const serviceItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      delay: 0.2 
    } 
  }
};

const Service = () => {
  return (
    <div className="service py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-400" id="service">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide bg-gray-200 dark:bg-gray-800 inline-block relative px-4 mb-4 text-gray-600 dark:text-gray-400">
          <span className="absolute inset-0 h-0.5 bg-gray-200 dark:bg-gray-800 top-1/2 left-0"></span>
          What I do
        </p>
        <h2 className="text-4xl font-bold mb-10">Awesome Quality Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/4 p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={serviceItemVariants}
            >
              <Parallax y={[-20, 20]} tagOuter="div">
                <motion.div 
                  className="service-item flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-all duration-500 hover:shadow-none"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="service-icon text-black dark:text-white text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="service-text text-center">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-base">{service.description}</p>
                  </div>
                </motion.div>
              </Parallax>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
