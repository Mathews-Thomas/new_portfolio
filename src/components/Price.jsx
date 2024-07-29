import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Price = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOrderClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const plans = [
    { title: 'Basic', price: '6000', description: 'Static Webpages', details: 'Starting from 6000rs or above', featured: false },
    { title: 'High-Level Website', price: '15000', description: 'Advanced Web Solutions', details: 'Starting from 15k or above', featured: true },
    { title: 'Software Development', price: '35000', description: 'Custom Software Solutions', details: 'Starting from 35k or above', featured: false }
  ];

  return (
    <div className="price py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-400" id="price">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-gray-200 dark:bg-gray-800 inline-block relative px-4 mb-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="absolute inset-0 h-0.5 bg-gray-200 dark:bg-gray-800 top-1/2 left-0"></span>
            Pricing Plan
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Affordable Price
          </motion.h2>
        </Parallax>
        <div className="flex flex-wrap -mx-4">
          {plans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <Parallax y={[10 * index, -10 * index]} tagOuter="div">
                <motion.div 
                  className={`price-item bg-gray-100 dark:bg-gray-800 shadow-lg ${plan.featured ? 'shadow-2xl border-t-4 border-gray-400 dark:border-gray-600' : ''} transition-shadow duration-500 rounded-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="price-header py-8 text-center border-b border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                    <h2 className="text-4xl font-bold relative inline-block">
                      <span className="text-lg top-2 left-0">₹</span>{plan.price}<span className="text-lg">/ above</span>
                    </h2>
                    <p className="text-lg mt-2">{plan.description}</p>
                  </div>
                  <div className="price-body p-6">
                    <p className="text-center mb-6">{plan.details}</p>
                  </div>
                  <div className="price-footer pb-8 text-center">
                    <button 
                      className="btn bg-gray-400 dark:bg-gray-600 text-black dark:text-gray-200 hover:bg-transparent hover:text-gray-900 dark:hover:text-gray-100 border border-gray-400 dark:border-gray-600 transition-all duration-300 px-6 py-2 rounded-full"
                      onClick={() => handleOrderClick(plan.title)}
                    >
                      Order Now
                    </button>
                  </div>
                </motion.div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Price;
