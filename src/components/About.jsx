import React from 'react';
import aboutImage from '../assets/img/about.jpg';

const About = () => {
  const skills = [
    { name: 'Web Design', percentage: 85 },
    { name: 'Web Development', percentage: 95 },
    { name: 'Apps Design', percentage: 90 },
    { name: 'Apps Development', percentage: 85 }
  ];

  return (
    <div className="about py-20 bg-gray-100" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        <div className="w-full lg:w-1/2 p-4 mb-8 lg:mb-0">
          <img src={aboutImage} alt="About" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="section-header mb-6">
            <p className="text-lg uppercase tracking-wide bg-white inline-block relative px-4 mb-4">
              <span className="absolute inset-0 h-0.5 bg-red-600 top-1/2 left-0"></span>
              Learn About Me
            </p>
            <h2 className="text-4xl font-bold">10 Years Experience</h2>
          </div>
          <p className="text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
          </p>
          <div className="skills mb-6">
            {skills.map(skill => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <p>{skill.name}</p>
                  <p>{skill.percentage}%</p>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-red-600 h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <a className="btn bg-red-600 text-white hover:bg-transparent hover:text-red-600 border border-red-600 transition-all duration-300" href="#contact">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
