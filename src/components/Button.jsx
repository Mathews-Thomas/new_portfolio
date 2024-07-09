// src/components/Button.jsx
import React from 'react';

const Button = ({ children, href }) => {
  return (
    <a href={href} className="btn bg-red-600 text-white py-3 px-5 text-sm font-semibold tracking-widest border-2 border-transparent shadow-custom transition ease-out duration-300 hover:text-red-600 hover:bg-transparent hover:shadow-none">
      {children}
    </a>
  );
}

export default Button;
