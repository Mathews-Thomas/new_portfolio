import React from 'react';

const experiences = [
  { date: '2024 - present', title: 'Software Developer', company: 'Ophize ,Kochi India', description: 'Developed software for multiple clients including Ophize, Kochi India' },
  // Add more experiences here
];

const Experience = () => {
  return (
    <div className="experience py-20 bg-black text-white" id="experience">
      <div className="container mx-auto px-6">
        <header className="section-header text-center mb-10">
          <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4 text-black">
            <span className="absolute inset-0 h-0.5 bg-white top-1/2 left-0"></span>
            My Resume
          </p>
          <h2 className="text-4xl font-bold">Working Experience</h2>
        </header>
        <div className="timeline relative">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item w-full md:w-1/2 p-4 relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="timeline-text bg-gray-800 shadow-lg p-6 rounded-lg relative">
                <h2 className="timeline-date text-white font-semibold tracking-wide uppercase text-lg mb-4">{exp.date}</h2>
                <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                <h4 className="text-lg italic mb-4">{exp.company}</h4>
                <p className="text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
