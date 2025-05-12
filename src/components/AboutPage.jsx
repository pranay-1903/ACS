import React, { useEffect, useState, useRef } from "react";
import AboutImage from "../assets/data-solutions.png";
import TestimonialImage from "../assets/about.png"; // Use correct path
import Image from "../assets/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUsers,
  faGlobeAmericas,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Navbar from "./Navbar";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);

          const updateCount = () => {
            start += step;
            if (start < target) {
              setCount(Math.floor(start));
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          updateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

  return (
    <h2 ref={ref} className="text-6xl font-extrabold text-gray-800 mb-2 ">
      {count}+
    </h2>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const [aboutImgRef, aboutImgInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-white  text-gray-800 font-['Syne',_sans-serif] w-screen">
      {/* Banner Section */}
      <div
        className="relative w-full h-screen bg-cover bg-top"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="absolute inset-0 flex flex-col items-center left-5 justify-center text-white text-center px-4">
          <h1
            className={`text-2xl md:text-7xl font-extrabold font-['Syne',_sans-serif] leading-tight text-white mb-6 transition-opacity duration-2000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            About Us
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-2000 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Home</span>
            <span className="mx-2">/</span>

            <span className="font-['Syne',_sans-serif]">About Us</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl md:text-4xl font-bold mb-4"
          >
            About Anasol Consultancy
          </motion.h3>
          <p className="text-gray-600 mb-6 text-xl">
            At Anasol Consultancy, we are dedicated to delivering tailored
            consultancy services that drive efficiency and growth. With a team
            of seasoned experts in various fields, we leverage our knowledge and
            experience to empower organizations like yours to reach their full
            potential. Our team commitment to excellence allows us to deliver
            solutions that not only meet, but exceed your expectations
          </p>

          <div className="flex gap-10 mb-6">
            <div>
              <Counter target={30} />
              <p className="text-gray-500">Million Users</p>
            </div>
            <div>
              <Counter target={15} />
              <p className="text-gray-500">Award Winning</p>
            </div>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-700"></ul>
        </div>

        <div
          ref={aboutImgRef}
          className={`transition-all duration-1000 ease-out flex justify-center ${
            aboutImgInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img src={AboutImage} alt="About" className="max-w-md" />
        </div>
      </div>

      <div className="text-[#091D31] text-lg font-bold flex items-center justify-center mx-auto my-10">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-4xl  font-bold mb-4"
        >
          Who we are
        </motion.h2>
      </div>
      <div className="bg-gray-150 w-[900px] h-[200px]  justify-center mx-auto ">
        <p className="text-xl">
          The founding goal of Anasol Consultancy in 2016 was to assist
          companies in managing the constantly changing digital landscape. The
          organization, which was founded with a passion for creativity and
          problem-solving, has expanded by emphasizing the development of
          trusting relationships with clients and learning about their
          particular difficulties. Anasol has built a solid reputation for
          providing dependable and innovative solutions throughout the years.
          Motivated by a dedication to quality, the group is looking for new
          chances and growing its influence in the sector.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-white  text-[#091D32] py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10  text-center">
          <div className="border-r border-indigo-600 ">
            <FontAwesomeIcon
              icon={faProjectDiagram}
              className="text-3xl  text-indigo-600 mb-2"
            />
            <Counter target={50} />
            <p className="uppercase tracking-wide text-[#091D32] text-sm ">
              Satisfied
              <br /> Clients
            </p>
          </div>

          <div className="border-r border-indigo-600 ">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-3xl text-indigo-600 mb-2"
            />
            <Counter target={70} />
            <p className="uppercase tracking-wide text-sm text-gray-600">
              Finished <br /> Projects
            </p>
          </div>

          <div className="border-r border-indigo-600 ">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-3xl text-indigo-600 mb-2"
            />
            <Counter target={100} />
            <p className="uppercase tracking-wide text-sm text-gray-600">
              Skilled <br /> Experts
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              className="text-3xl text-indigo-600 mb-2"
            />
            <Counter target={20} />
            <p className="uppercase tracking-wide text-sm text-gray-600">
              Quality <br /> Teams
            </p>
          </div>
        </div>
      </div>
      {/* Testimonial Section with Scroll Animation */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out flex justify-center ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src={TestimonialImage}
            alt="Testimonials"
            className="w-[600px] h-[600px] object-contain rounded-lg"
          />
        </div>

        {/* The right-hand content would go here */}

        <div className="space-y-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl font-semibold text-gray-800"
          >
            Ensuring Your Success Through Reliable IT Solutions
          </motion.h2>

          <p className="text-xl text-gray-600">
            Anasol Consultancy specializes in delivering exceptional services
            across various technology sectors. We leverage cutting-edge
            equipment, adhere to industry best practices, and apply our
            expertise to offer tailored solutions that meet the unique
            requirements of each client. Below, you will find a detailed list of
            our services along with a showcase of our successful projects.
            <li>Technology Consultancy</li>
            <li>We Provide best services</li>
            <li> Maintenance And Support</li>
            <li>Requirements Gathering</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
