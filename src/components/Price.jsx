import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const services = [
    { 
      title: 'Web Development', 
      description: 'Building responsive and functional websites.', 
      details: 'I create custom websites that are not only visually appealing but also optimized for performance and SEO. Whether it’s a personal blog, a business site, or an e-commerce platform, I can bring your vision to life.', 
      featured: true 
    },
    { 
      title: 'UI/UX Design', 
      description: 'Designing user-centered interfaces.', 
      details: 'My designs focus on creating seamless user experiences that are intuitive and enjoyable. I specialize in crafting interfaces that are both aesthetically pleasing and easy to navigate.', 
      featured: false 
    },
    { 
      title: 'Consulting & Strategy', 
      description: 'Helping you define and execute your digital strategy.', 
      details: 'I offer consulting services to help you plan and implement effective digital strategies. From choosing the right technology stack to optimizing your digital presence, I can guide you every step of the way.', 
      featured: false 
    }
  ];

  return (
    <div className="services py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-400" id="services">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-gray-200 dark:bg-gray-800 inline-block relative px-4 mb-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="absolute inset-0 h-0.5 bg-gray-200 dark:bg-gray-800 top-1/2 left-0"></span>
            What I Offer
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My Services
          </motion.h2>
        </Parallax>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <motion.div 
                  className={`service-item bg-gray-100 dark:bg-gray-800 shadow-lg ${service.featured ? 'shadow-2xl border-t-4 border-gray-400 dark:border-gray-600' : ''} transition-shadow duration-500 rounded-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="service-header py-8 text-center border-b border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-lg mt-2">{service.description}</p>
                  </div>
                  <div className="service-body p-6">
                    <p className="text-center mb-6">{service.details}</p>
                  </div>
                  <div className="service-footer pb-8 text-center">
                    <button 
                      className="btn bg-gray-400 dark:bg-gray-600 text-black dark:text-gray-200 hover:bg-transparent hover:text-gray-900 dark:hover:text-gray-100 border border-gray-400 dark:border-gray-600 transition-all duration-300 px-6 py-2 rounded-full"
                      onClick={() => handleLearnMoreClick(service.title)}
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          >
            <Modal showModal={showModal} setShowModal={setShowModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;
