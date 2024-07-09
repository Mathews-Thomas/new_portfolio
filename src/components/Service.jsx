import React from 'react';
import { FaLaptop, FaLaptopCode, FaAndroid, FaApple } from 'react-icons/fa';

const services = [
  { icon: <FaLaptop />, title: 'Web Design', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' },
  { icon: <FaLaptopCode />, title: 'Web Development', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' },
  { icon: <FaAndroid />, title: 'Apps Design', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' },
  { icon: <FaApple />, title: 'Apps Development', description: 'Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non' }
];

const Service = () => {
  return (
    <div className="service py-20 bg-gray-100" id="service">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4">
          <span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 left-0"></span>
          What I do
        </p>
        <h2 className="text-4xl font-bold mb-10">Awesome Quality Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="service-item flex flex-col items-center bg-white shadow-lg p-6 rounded-lg transition-all duration-500 hover:shadow-none">
                <div className="service-icon text-red-600 text-6xl mb-4">{service.icon}</div>
                <div className="service-text text-center">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-base">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
