import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Dp from '../assets/img/mathews.jpg';
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
        title: 'Thank you For Your Message!',
        text: "I'll get back to you as soon as I can.",
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
    <div className="contact bg-white dark:bg-gray-900 py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg uppercase tracking-wide text-gray-600 dark:text-gray-400">Get In Touch</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-400">Contact Me</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center text-gray-900 dark:text-white">
            <img src= {Dp} alt="Dp" className="w-48 h-48 rounded-full shadow-lg border-4" style={{ objectFit: 'cover' }}/>
          </div>
          <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-gray-600 dark:focus:border-gray-400 focus:outline-none bg-white dark:bg-gray-700"
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
                  className="form-control w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-gray-600 dark:focus:border-gray-400 focus:outline-none bg-white dark:bg-gray-700"
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
                  className="form-control w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-gray-600 dark:focus:border-gray-400 focus:outline-none bg-white dark:bg-gray-700"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-gray-600 dark:focus:border-gray-400 focus:outline-none bg-white dark:bg-gray-700"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  className="btn bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-400 dark:hover:bg-gray-900 hover:text-gray-800 dark:hover:text-gray-300"
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
