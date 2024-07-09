import React from 'react';

const experiences = [
  { date: '2045 - 2050', title: 'Web Developer', company: 'Soft Agency, San Francisco, CA', description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.' },
  // Add more experiences here
];

const Experience = () => {
  return (
    <div className="experience py-20 bg-gray-100" id="experience">
      <div className="container mx-auto px-6">
        <header className="section-header text-center mb-10">
          <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4">
            <span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 left-0"></span>
            My Resume
          </p>
          <h2 className="text-4xl font-bold">Working Experience</h2>
        </header>
        <div className="timeline relative">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item w-full md:w-1/2 p-4 relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="timeline-text bg-white shadow-lg p-6 rounded-lg relative">
                <h2 className="timeline-date text-red-600 font-semibold tracking-wide uppercase text-lg mb-4">{exp.date}</h2>
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
