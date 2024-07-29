import React, { useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal);

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select a Service',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sheetdb.io/api/v1/ux2prj8f85wyz', formData);
      MySwal.fire({
        title: 'Thank you for your message!',
        text: "I'll get back to you as soon as I can.",
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      setFormData({ name: '', email: '', service: 'Select a Service' });
      setShowModal(false);
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
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-11/12 md:w-1/3 relative">
        <button 
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
          onClick={() => setShowModal(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">Order Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input 
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 dark:text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              type="text" 
              placeholder="Your Name" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input 
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 dark:text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              type="email" 
              placeholder="Your Email" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="service">Service</label>
            <select 
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 dark:text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option disabled>Select a Service</option>
              <option value="Basic - Static Webpages">Basic - Static Webpages</option>
              <option value="High-Level Website">High-Level Website</option>
              <option value="Software Development">Software Development</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out" 
              type="submit"
            >
              Submit
            </button>
            <button 
              className="text-red-600 hover:text-red-800 text-sm font-bold transition duration-300 ease-in-out" 
              type="button" 
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
