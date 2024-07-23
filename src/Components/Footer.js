import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-6 text-white text-center">
      <p>© 2024 Seri Pvt Ltd. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://instagram.com" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://google.com" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
