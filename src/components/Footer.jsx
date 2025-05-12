import React, { useState } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import logo from "../assets/Logo1.png";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "admin@anasolconsultancyservices.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Popup disappears after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <footer className="bg-black font-['Syne',_sans-serif] text-white p-8">
      <div className="max-w-screen-xl mx-auto text-center space-y-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" className="w-15" />
              <span className="text-2xl font-semibold text-white">
                Anasol Consultancy Services
                {<br></br>} <p className="text-white text-sm"> Since 2016</p>
              </span>
            </div>
            <p className="text-gray-400">
              Feel free to initiate a project and let's explore how we can
              collaborate.
            </p>
          </div>

          <div className="flex  items-center gap-2 mt-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full flex items-center gap-2">
              <BsCalendarCheck />
              <Link to="/contact">LET’S CONNECT</Link>
            </button>
            <div className="relative">
              <button
                onClick={copyEmailToClipboard}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full flex items-center gap-2"
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

        <div className="p-8" />

        <div className="flex justify-between items-center p-2 border-t border-b border-white ">
          <div className="flex justify-center gap-8 text-gray-400">
            <div>
              <a
                href="mailto:admin@anasolconsultancyservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white cursor-pointer"
              >
                <CiMail />
                admin@anasolconsultancyservices.com
              </a>

              <a
                href="https://www.google.co.in/maps/place/Anasol+Consultancy+Services+Pvt+Ltd/@17.3998302,78.5528739,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99373294cf7f:0x3876959fe67ce02e!8m2!3d17.3998302!4d78.5554488!16s%2Fg%2F11wj2d324x?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-1 text-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <IoLocation />
                  anasolconsultancyservices Pvt Ltd
                </div>
                <p className="text-gray-400 text-sm">
                  1016, 10th floor, DSL abacus IT park, Uppal, Hyderabad,
                  500039, India
                </p>
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 text-gray-400 mt-4">
            <a
              href="https://www.instagram.com/anasol_consultancy_services?igsh=MW9rNDByMGRpZDFiaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/anasol-consultancy-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://x.com/anasol_services?t=vIM5K3hRnhwu6cm8AkN_xw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaXTwitter size={25} />
            </a>
          </div>
        </div>

        <p className="font-normal text-white mt-6">Copyright © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
