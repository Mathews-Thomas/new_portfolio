import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-2">Mathews Thomas</h2>
        <p className="text-lg mb-2">682037, Kochi</p>
        <div className="footer-menu mb-4">
          <p className="text-lg">7736790251</p>
          <p className="text-lg">mathewsxo@gmail.com</p>
        </div>
        <div className="footer-social mb-6 flex justify-center space-x-4">
          <a className="text-white hover:text-gray-400 transition duration-300" href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a className="text-white hover:text-gray-400 transition duration-300" href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
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
