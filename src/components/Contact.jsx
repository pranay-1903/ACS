import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import React from "react";
import AnimatedCard from "./AnimatedCard";
import Image from "../assets/contactbg.jpeg";

// Lottie files
import Instagram from "../assets/Instagram.json";
import Gmail from "../assets/Gmail.json";
import link from "../assets/LinkedIn.json";
import X from "../assets/Twitter.json";

const ConnectSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-['Syne',_sans-serif]">
      {/* Header Section */}
      <div
        className="relative w-full h-[60vh] md:h-screen bg-cover bg-top"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1
            className={`text-2xl md:text-7xl font-extrabold leading-tight text-white mb-6 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Contact
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-1000 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Home</span> <span className="mx-2">/</span>{" "}
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 md:px-10 py-20 bg-white max-w-4xl mx-auto">
        <AnimatedCard delay={400}>
        <div className="bg-white shadow-md border rounded-lg p-8">
            <Lottie animationData={Gmail} className="h-26 w-26 mx-auto mb-4" loop />
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              Reach out to us anytime via email. Whether you have a question,
              feedback, or a business inquiry, we’re just a message away.
            </p>
            <a
              href="mailto:hr@anasolconsultancyservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              hr@anasolconsultancyservices.com
            </a>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <div className="bg-white shadow-md border rounded-lg p-8">
            <Lottie animationData={link} className="h-32 w-32 mx-auto mb-4" loop />
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">Connect with Us on LinkedIn</h2>
            <p className="text-gray-700 mb-6">
              Stay updated with company news, tech insights, and job openings.
            </p>
            <a
              href="https://www.linkedin.com/company/anasol-consultancy-services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit LinkedIn Profile
            </a>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={500}>
          <div className="bg-white shadow-md border rounded-lg p-8">
            <Lottie animationData={X} className="h-32 w-32 mx-auto mb-4" loop />
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">Follow Us on X</h2>
            <p className="text-gray-700 mb-6">
              Stay in the loop with real-time updates, news, and announcements.
            </p>
            <a
              href="https://x.com/anasol_services?t=vIM5K3hRnhwu6cm8AkN_xw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Go to X Profile
            </a>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={600}>
          <div className="bg-white shadow-md border rounded-lg p-8">
            <Lottie animationData={Instagram} className="h-32 w-32 mx-auto mb-4" loop />
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">Follow Us on Instagram</h2>
            <p className="text-gray-700 mb-6">
              Explore our work culture, events, and team milestones in photos.
            </p>
            <a
              href="https://www.instagram.com/anasol_consultancy_services?igsh=MW9rNDByMGRpZDFiaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Instagram
            </a>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default ConnectSection;