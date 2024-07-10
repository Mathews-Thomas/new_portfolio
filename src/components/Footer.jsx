import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-2">Mathews Thomas</h2>
        <p className="mb-2">682037, Kochi</p>
        <div className="footer-menu mb-4">
          <p>7736790251</p>
          <p>mathewsxo@gmail.com</p>
        </div>
        <div className="footer-social mb-6 flex justify-center space-x-4">
          <a className="text-white hover:text-gray-400 transition duration-300" href="#">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
        <div className="text-sm">
          <p>&copy; <a href="#" className="text-gray-400 hover:underline">Mathews Thomas</a>, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
