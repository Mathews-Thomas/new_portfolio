import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sheetdb.io/api/v1/qzxax49umbzso', formData);
      MySwal.fire({
        title: 'Success!',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting the form:', error);
      MySwal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  return (
    <div className="contact bg-gray-900 py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg uppercase tracking-wide text-gray-400">Get In Touch</p>
          <h2 className="text-4xl font-bold text-gray-400">Contact Me</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center text-white">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83-.47-5.1-2.74-5.57-5.57H6v-2h1.43c.45-2.83 2.72-5.1 5.57-5.57V6h2v1.43c2.83.45 5.1 2.72 5.57 5.57H18v2h-1.43c-.45 2.83-2.72 5.1-5.57 5.57V18h-2v1.93zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5zm0 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
            </svg>
          </div>
          <div className="w-full md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control w-full p-4 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control w-full p-4 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control w-full p-4 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control w-full p-4 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  className="btn bg-gray-800 text-gray-400 border border-gray-700 px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-900 hover:text-gray-400"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
