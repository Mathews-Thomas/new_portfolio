import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10 text-sm">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-2">Mathews Thomas</h2>
        <p className="text-md mb-2">India, Kochi</p>
        <div className="footer-menu mb-4">
          <p className="text-md">+91 7736790251</p>
          <p className="text-md">mathewsxo@gmail.com</p>
        </div>
        <div className="footer-social mb-6 flex justify-center space-x-4">
          <a className="text-gray-400 bg-gray-900 border border-gray-700 hover:text-gray-700 rounded-md transition duration-300 p-2" href="https://twitter.com/" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a className="text-gray-400 bg-gray-900 border border-gray-700 hover:text-gray-700 rounded-md transition duration-300 p-2" href="https://facebook.com/" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a className="text-gray-400 bg-gray-900 border border-gray-700 hover:text-gray-700 rounded-md transition duration-300 p-2" href="https://youtube.com/" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a className="text-gray-400 bg-gray-900 border border-gray-700 hover:text-gray-700 rounded-md transition duration-300 p-2" href="https://instagram.com/_mathewsthomas_" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a  className="text-gray-400 bg-gray-900 border border-gray-700 hover:text-gray-700 rounded-md transition duration-300 p-2" href="https:/linkedin.com/in/mathewsthomas" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a className="text-gray-400 bg-gray-900 border border-gray-700 hover:text-gray-700 rounded-md transition duration-300 p-2" href="https://github.com/Mathews-Thomas" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
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
