import React from 'react';

const Contact = () => {
  return (
    <div className="contact bg-gray-100 py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg uppercase tracking-wide text-gray-700">Get In Touch</p>
          <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83-.47-5.1-2.74-5.57-5.57H6v-2h1.43c.45-2.83 2.72-5.1 5.57-5.57V6h2v1.43c2.83.45 5.1 2.72 5.57 5.57H18v2h-1.43c-.45 2.83-2.72 5.1-5.57 5.57V18h-2v1.93zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5zm0 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
            </svg>
          </div>
          <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="mb-4">
                <input type="text" className="form-control w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                <p className="help-block text-red-600"></p>
              </div>
              <div className="mb-4">
                <input type="email" className="form-control w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                <p className="help-block text-red-600"></p>
              </div>
              <div className="mb-4">
                <input type="text" className="form-control w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                <p className="help-block text-red-600"></p>
              </div>
              <div className="mb-4">
                <textarea className="form-control w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                <p className="help-block text-red-600"></p>
              </div>
              <div>
                <button className="btn bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600" type="submit" id="sendMessageButton">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
