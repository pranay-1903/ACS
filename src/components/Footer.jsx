import React, { useState } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import logo from "../assets/Logo1.png";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaXTwitter, FaCopy } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "admin@anasolconsultancyservices.com";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-black text-white font-['Syne',_sans-serif] px-6 py-10">
      <div className="max-w-screen-xl mx-auto space-y-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div className="flex-1 min-w-[280px] space-y-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-16" />
              <div>
                <h2 className="text-2xl font-semibold">
                  Anasol Consultancy Services
                </h2>
                <p className="text-sm text-gray-400">Since 2016</p>
              </div>
            </div>
            <p className="text-gray-400">
              Feel free to initiate a project and let's explore how we can
              collaborate.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-end items-center w-full sm:w-auto">
            <Link
              to="/contact"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              <BsCalendarCheck />
              LET’S CONNECT
            </Link>
            <div className="relative w-full sm:w-auto">
              <button
                onClick={copyEmailToClipboard}
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full flex items-center gap-2 w-full justify-center"
              >
                <FaCopy />
                COPY EMAIL
              </button>
              {isCopied && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white">
                  Email copied!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600"></div>

        {/* Contact + Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Contact */}
          <div className="flex-1 min-w-[280px] space-y-4">
            <a
              href="mailto:admin@anasolconsultancyservices.com"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <CiMail />
              admin@anasolconsultancyservices.com
            </a>
            <a
              href="https://www.google.co.in/maps/place/Anasol+Consultancy+Services+Pvt+Ltd/@17.3998302,78.5528739"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 text-white hover:text-gray-300"
            >
              <span className="flex items-center gap-2">
                <IoLocation />
                anasolconsultancyservices Pvt Ltd
              </span>
              <p className="text-sm text-gray-400">
                1016, 10th floor, DSL Abacus IT Park, Uppal, Hyderabad, 500039,
                India
              </p>
            </a>
          </div>

          {/* Social */}
          <div className="flex-1 flex justify-center lg:justify-end gap-6 text-gray-400">
            <a
              href="https://www.instagram.com/anasol_consultancy_services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/anasol-consultancy-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/anasol_services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-white pt-6">
          &copy; 2025 Anasol Consultancy Services
        </p>
      </div>
    </footer>
  );
};

export default Footer;