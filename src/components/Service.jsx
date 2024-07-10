import React from 'react';
import { FaLaptop, FaLaptopCode, FaAndroid, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaLaptop />, title: 'Web Design', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' },
  { icon: <FaLaptopCode />, title: 'Web Development', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' },
  { icon: <FaAndroid />, title: 'Apps Design', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' },
  { icon: <FaApple />, title: 'Apps Development', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' }
];

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
    <div className="service py-20 bg-black text-white" id="service">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black">
          <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
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
              <motion.div 
                className="service-item flex flex-col items-center bg-gray-800 shadow-lg p-6 rounded-lg transition-all duration-500 hover:shadow-none"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="service-icon text-white text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <div className="service-text text-center">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-base">{service.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
