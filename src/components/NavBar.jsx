import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-2xl font-bold">
          {" "}
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83-.47-5.1-2.74-5.57-5.57H6v-2h1.43c.45-2.83 2.72-5.1 5.57-5.57V6h2v1.43c2.83.45 5.1 2.72 5.57 5.57H18v2h-1.43c-.45 2.83-2.72 5.1-5.57 5.57V18h-2v1.93zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5zm0 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:relative md:translate-y-0 md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-16 md:mt-0 p-4 md:p-0">
            {[
              "home",
              "about",
              "service",
              "experience",
              "portfolio",
              "price",
              "review",
              "team",
              "blog",
              "contact",
            ].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                className="block text-gray-700 hover:text-red-600 transition-colors hover:cursor-pointer px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
