import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-2xl font-bold mb-2">Mathews Thomas</h2>
        <p className="mb-2">682037,Thuthiyoor,Kakkanad,Kochi</p>
        <div className="footer-menu mb-4">
          <p>7736790251</p>
          <p>mathewsxo@gmail.com</p>
        </div>
        <div className="footer-social mb-4 flex justify-center space-x-4">
          <a className="text-white hover:text-blue-500 transition duration-300" href="#"><i className="fab fa-twitter"></i></a>
          <a className="text-white hover:text-blue-500 transition duration-300" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="text-white hover:text-blue-500 transition duration-300" href="#"><i className="fab fa-youtube"></i></a>
          <a className="text-white hover:text-blue-500 transition duration-300" href="#"><i className="fab fa-instagram"></i></a>
          <a className="text-white hover:text-blue-500 transition duration-300" href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="text-sm">
          <p>&copy; <a href="#" className="text-blue-500 hover:underline">Mathews Thomas</a>, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
