import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Price = () => {
  const plans = [
    { title: 'Basic', price: 49, features: ['Bootstrap 4', 'React', 'Responsive Design', 'Browser Compatibility', 'Easy To Use'], featured: false },
    { title: 'Standard', price: 99, features: ['Bootstrap 4', 'React', 'Responsive Design', 'Browser Compatibility', 'Easy To Use'], featured: true },
    { title: 'Premium', price: 149, features: ['Tailwind CSS', 'React', 'Responsive Design', 'Browser Compatibility', 'Easy To Use'], featured: false }
  ];

  return (
    <div className="price py-20 bg-black text-white" id="price">
      <div className="container mx-auto text-center px-6">
        <Parallax y={[-20, 20]} tagOuter="div">
          <motion.p 
            className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
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
                  className={`price-item bg-gray-800 shadow-lg ${plan.featured ? 'shadow-2xl border-t-4 border-gray-400' : ''} transition-shadow duration-500 rounded-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="price-header py-8 text-center border-b border-gray-700">
                    <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                    <h2 className="text-4xl font-bold relative inline-block">
                      <span className="text-lg top-2 left-0">$</span>{plan.price}<span className="text-lg">/ mo</span>
                    </h2>
                  </div>
                  <div className="price-body p-6">
                    <ul className="text-left mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="py-2 border-b border-gray-700 last:border-none">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="price-footer pb-8 text-center">
                    <a href="#" className="btn bg-gray-400 text-black hover:bg-transparent hover:text-white border border-gray-400 transition-all duration-300 px-6 py-2 rounded-full">Order Now</a>
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

export default Price;
