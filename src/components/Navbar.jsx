import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assets/Logo1.png";
import { Link, useLocation } from "react-router-dom"; // Use Link to navigate between pages

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLightBackground =
    location.pathname !== "/" && location.pathname !== "/services";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 px-10 py-3 flex items-center justify-between font-['Syne',_sans-serif] ${
        isHome ? "text-black" : "text-white"
      } [&_*]:text-inherit`}
    >
      {/* Logo */}
      <Link to="/" className="flex  items-center space-x-2 md:space-x-3">
        <img src={img} alt="logo" className="w-12 md:w-20" />
        <div className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-800 leading-tight">
          Anasol <br /> Consultancy <br /> Services
          <p className="text-black text-xs md:text-sm">Since 2016</p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-xl font-medium text-[#0f172a]">
        <li>
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-600 cursor-pointer">
            Services
          </Link>
        </li>
        <li>
          <Link to="/carrers" className="hover:text-blue-600 cursor-pointer">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative">
        <button
          onClick={toggleDropdown}
          className="text-2xl text-[#0f172a] focus:outline-none"
        >
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-black text-lg font-medium">
            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer !text-black">
              <Link
                to="/"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-blue-600 cursor-pointer !text-black"
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer !text-black">
              <Link
                to="/about"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-blue-600 cursor-pointer !text-black"
              >
                About
              </Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer !text-black">
              <Link
                to="/services"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-blue-600 cursor-pointer !text-black"
              >
                Services
              </Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer !text-black">
              <Link
                to="/carrers"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-blue-600 cursor-pointer"
              >
                Careers
              </Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer !text-black">
              <Link
                to="/contact"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-blue-600 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;