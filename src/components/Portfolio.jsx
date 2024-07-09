import React from 'react';
import portfolio1 from '../assets/img/portfolio-1.jpg';
import portfolio2 from '../assets/img/portfolio-2.jpg';
import portfolio3 from '../assets/img/portfolio-3.jpg';
import portfolio4 from '../assets/img/portfolio-4.jpg';
import portfolio5 from '../assets/img/portfolio-5.jpg';
import portfolio6 from '../assets/img/portfolio-6.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio py-20 bg-gray-100" id="portfolio">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4">
          <span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 left-0"></span>
          My Portfolio
        </p>
        <h2 className="text-4xl font-bold mb-10">My Excellent Portfolio</h2>
        <ul className="flex flex-wrap justify-center mb-8">
          {['All', 'Web Design', 'Mobile Apps', 'Game Dev'].map((filter, index) => (
            <li key={index} className="filter-active cursor-pointer inline-block mx-2 my-1 py-2 px-4 bg-red-600 text-white border-2 border-transparent shadow-inner hover:text-red-600 hover:bg-transparent hover:border-red-600 transition-all duration-300">
              {filter}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap -mx-4">
          {[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6].map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="portfolio-item relative group overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                <div className="portfolio-text absolute bottom-0 left-0 w-full bg-white p-4 shadow-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold">Portfolio {index + 1}</h3>
                  <a href={image} className="btn bg-red-600 text-white absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-10 h-10 flex items-center justify-center text-2xl">+</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
