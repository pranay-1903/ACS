import { FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMessage } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import React from "react";
import Image from "../assets/contactbg.jpeg";
import { MdEmail } from "react-icons/md";
import AnimatedCard from "./AnimatedCard"; // Adjust the path as necessary
import Lottie from "lottie-react";
import Instagram from "../assets/Instagram.json";
import Gmail from "../assets/Gmail.json";
import link from "../assets/LinkedIn.json";
import X from "../assets/Twitter.json";
import Facebook from "../assets/Facebook.json";
import phone from "../assets/Phone.json";

const ConnectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="font-['Syne',_sans-serif]">
      {/* Header Section */}
      <div
        className="min-w-screen min-h-screen bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center left-5 justify-center text-white text-center px-4">
          <h1
            className={`text-2xl md:text-7xl font-extrabold font-['Syne',_sans-serif] leading-tight text-white mb-6 transition-opacity duration-2000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Contact
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-2000 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Home</span> <span className="mx-2">/</span>{" "}
            <span className="font-['Syne',_sans-serif]">Contact</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20 py-20 bg-white">
        <AnimatedCard delay={100}>
          <div className="bg-white shadow-md border rounded-lg p-8">
            <Lottie animationData={Gmail} className="h-25 w-25" loop={true} />

            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
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

        <AnimatedCard delay={200}>
          <div className="bg-white shadow-md border rounded-lg p-5">
            <div className="text-4xl mb-4 text-[#1b2a35]">
              <Lottie animationData={phone} className="h-25 w-25" loop={true} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">Talk</h2>
            <p className="text-gray-700 mb-4">
              Interested in custom software solutions, cloud services, or
              digital transformation? Call our experts to explore how we can
              accelerate your business.
            </p>
            <a
              href="tel:+18578295060"
              className="text-blue-600 font-medium block mb-2 hover:underline"
            >
              +1 857 829 5060
            </a>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={300}>
          <div className="bg-white shadow-md border rounded-lg p-8">
            <div className="text-4xl mb-4 text-[#1b2a35]">
              <Lottie
                animationData={Facebook}
                className="h-25 w-25"
                loop={true}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">
              Connect with Us on Facebook
            </h2>
            <p className="text-gray-700 mb-6">
              Need help with one of our services? We're here 24/7.
            </p>
            <a
              href="https://www.facebook.com/people/Anasol-Consultancy-Services/61566561414189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Facebook Profile
            </a>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <div className="bg-white shadow-md border rounded-lg p-8">
            <div className="text-4xl mb-4 text-[#1b2a35]">
              <Lottie animationData={link} className="h-25 w-25" loop={true} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">
              Connect with Us on LinkedIn
            </h2>
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
            <div className="text-4xl mb-4 text-[#1b2a35]">
              <Lottie animationData={X} className="h-25 w-25" loop={true} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">
              Follow Us on X
            </h2>
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
            <div className="text-4xl mb-4 text-[#1b2a35]">
              <Lottie
                animationData={Instagram}
                className="h-25 w-25"
                loop={true}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#1b2a35]">
              Follow Us on Instagram
            </h2>
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
