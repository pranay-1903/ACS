import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceBox = ({ icon: Icon, bgImage, number, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Slug for link
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  return (
    <div
      className="relative group overflow-hidden rounded-lg border border-gray-200 h-[370px] w-[330px] lg:h-[400px] lg:w-[350px]  bg-black lg:bg-white transition-all duration-300 hover:shadow-lg py-3 mt-8"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inject Keyframes directly into the component */}
      <style>
        {`
          @keyframes shakeX {
            0% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-5px);
            }
            50% {
              transform: translateX(5px);
            }
            75% {
              transform: translateX(-5px);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-shakeX {
            animation: shakeX 0.4s ease-in-out;
          }
        `}
      </style>

      {/* Background Image (hidden until hover) */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover opacity-50 lg:opacity-0 bg-black group-hover:opacity-90 transition-opacity duration-300 z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white lg:text-black group-hover:text-white transition-colors duration-300">
        {/* Icon */}
        <div className="flex justify-start">
          <div className="bg-[#f1f5f9] group-hover:bg-white p-4 rounded-full w-fit">
            <Icon
              className={`w-12 h-12 text-black ${
                isHovered ? "animate-shakeX" : ""
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold mb-1">{number}</p>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>

        {/* Link */}
        <Link
          to={`/services/${slug}`}
          className="mt-4 font-semibold cursor-pointer relative w-fit group/view"
        >
          <span className="group-hover/view:text-white transition-colors duration-300">
            View details →
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover/view:w-full"></span>
        </Link>
      </div>

      {/* Background overlay to darken image for readability */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-[5]"></div>
    </div>
  );
};

export default ServiceBox;
