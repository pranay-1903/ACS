import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import emp from "../assets/emp.png";
import intern from "../assets/intern.png";
import service from "../assets/OurSer.png";
import img1 from "../assets/download.png";
import img2 from "../assets/it.png";
import img3 from "../assets/soft.png";
import img4 from "../assets/sales.png";
import img5 from "../assets/business.png";
import img6 from "../assets/h1.png";
import why from "../assets/why.png";
import aws from "../assets/aws.png";
import sales from "../assets/salesf.png";
import java from "../assets/javai.png";
import db from "../assets/db.png";
import az from "../assets/azu.png";
import pb from "../assets/pbi.png";
import py from "../assets/python.png";
import test from "../assets/testing.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { FaCircleChevronUp } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

import {
  faProjectDiagram,
  faUsers,
  faGlobeAmericas,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [isVisibleOnRefresh, setIsVisibleOnRefresh] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const circleServicesRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Unobserve after triggering animation
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (circleServicesRef.current) {
      observer.observe(circleServicesRef.current);
    }

    return () => {
      if (circleServicesRef.current) {
        observer.unobserve(circleServicesRef.current);
      }
    };
  }, []);
  useEffect(() => {
    // Trigger animation only on component mount (refresh)
    setTimeout(() => {
      setIsVisibleOnRefresh(true);
    }, 200); // Adjust the delay if needed
  }, []);
  const technologies = [
    { name: "Salesforce", icon: sales },
    { name: "AWS", icon: aws },
    { name: "Python", icon: py },
    { name: "Data Base", icon: db },
    { name: "Azure", icon: az },
    { name: "Power Bi", icon: pb },
    { name: "Java", icon: java },
    { name: "Testing", icon: test },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Makes animation happen only once
    });
  }, []);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Trigger the animation when the page is scrolled down by more than 150px
    if (scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            const duration = 1000;
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
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
    });
  }, [controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element enters the view
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: serRef, inView: serInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true, // Trigger only once when the element enters the view
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  const services = [
    { img: img2, title: "Business Intelligence" },
    { img: img3, title: "Software Development" },
    { img: img4, title: "Salesforce" },
    { img: img5, title: "Data Analyst" },
    {
      img: intern,
      title: "Intership Training",
    },
    {
      img: test,
      title: "Testing",
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 md:py-20">
        {/* Text Section */}
        <div className="max-w-xl md:pl-10 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{
              opacity: isVisibleOnRefresh ? 1 : 0,
              y: isVisibleOnRefresh ? 0 : 50,
              scale: 1,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-5xl font-extrabold font-['Syne',_sans-serif] leading-tight text-[#0f172a] mb-4 md:mb-6"
          >
            Experience Exceptional Consultancy Services <br />
            Designed To Drive Your Success in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-800">
              ACS
            </span>
            .
          </motion.h1>
          <h2 className="text-lg font-semibold mb-2 font-['Syne',_sans-serif]">
            👋 Best Solutions Services
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 font-['Syne',_sans-serif]">
            Welcome to Anasol Consultancy Services, where we specialize in
            transforming businesses through technology solutions.
          </p>
          <button className="bg-[#0f172a] text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#1e293b] cursor-pointer transition">
            <Link to="/contact">🗨 LET'S TALK</Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:ml-10 pr-0 md:pr-10 w-full max-w-xs md:max-w-md">
          <div
            className="rounded-[3rem] border-[1px] border-[#0f172a] p-2 md:p-4 transition duration-700 transform opacity-0 translate-y-10"
            onLoad={(e) =>
              e.currentTarget.classList.remove("opacity-0", "translate-y-10")
            }
          >
            <img
              src={img1}
              alt="Consultancy"
              className="rounded-[2rem] md:rounded-[3rem] object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div
        ref={serRef}
        className="h-50 flex px-10 bg-white items-center font-['Syne',_sans-serif]"
      >
        <h1
          className={`text-7xl font-extrabold mr-30 transition-all duration-1000 transform ${
            serInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Our Services
        </h1>
      </div>

      {/* Services Section */}

      {/* About Us Content */}
      <div className="font-sans min-h-screen bg-black">
        {/* Header */}
        <div className="px-6 md:px-10 lg:px-20 py-10">
          <button className="border border-white w-fit p-3 rounded-2xl mb-4">
            <p className="text-white font-['Syne',_sans-serif]">SERVICES</p>
          </button>
          <h1 className="text-2xl md:text-3xl text-white font-semibold leading-tight font-['Syne',_sans-serif]">
            <span className="text-lg block">Best Solutions Services</span>
            Offers Expert Services To Help
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 items-center">
          {/* Left - Text + Circle Services */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-white font-['Syne',_sans-serif]">
            <div
              ref={circleServicesRef}
              className="relative  w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center mb-10"
            >
              <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-700 flex items-center justify-center z-10">
                <img
                  src={emp}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Items */}
              {services.map((service, index) => {
                const angle = (index / services.length) * 2 * Math.PI;
                const radius = window.innerWidth < 768 ? 100 : 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-blue-800 rounded-full flex items-center justify-center text-center shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, x, y }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full  object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-full flex items-center justify-center p-4">
                      <p className="text-white font-semibold text-xs md:text-sm">
                        {service.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <button className="text-sm p-2  md:text-base md:px-5  md:py-2 lg:text-xl lg:p-3 lg:ml-30 border bg-white text-black border-white rounded-3xl  hover:bg-white hover:text-black transition">
              <Link to="/services">View More {">"}</Link>
            </button>
          </div>

          {/* Right - Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <img
              src={service}
              alt="Illustrator"
              className="w-[90%] md:w-[80%] h-auto object-cover rounded-[2rem] md:rounded-[4rem] lg:-translate-y-[350px]"
            />
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="h-50 flex justify-end px-10 bg-white items-center font-['Syne',_sans-serif]"
      >
        <h1
          className={`text-7xl font-extrabold transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          About Us
        </h1>
      </div>

      <div className="font-sans min-h-screen bg-black">
        {/* About Us Content */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full max-w-6xl">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center">
              <div className="absolute top-0 left-0 right-0 bottom-0 opacity-75 rounded-tl-[8rem] rounded-br-[8rem] overflow-hidden"></div>
              <img
                src={img6}
                alt="Illustrator"
                className="relative w-[80%] h-[100%] lg:-translate-y-[150px] lg:mr-30 lg:w-[95%] lg:h-[90%]  lg:mb-20 py-10 object-cover rounded-[8rem] rounded-br-[8rem] md:ml-40 md:h-[60%] md:w-[100%] "
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-auto py-20 flex flex-col font-['Syne', _sans-serif] text-white">
              <button>
                <span className="text-white border border-white py-2 px-4 rounded-2xl">
                  ABOUT
                </span>
              </button>

              <h1 className="text-3xl p-5 px-6 md:px-30 lg:text-4xl font-semibold leading-tight whitespace-nowrap">
                <span>Strategy with Purpose,</span>
                <br />
                <span>Solutions with Impact</span>
              </h1>
              <span className="p-5 px-6 md:px-30 font-normal text-lg max-w-3xl leading-relaxed">
                At Anasol Consultancy, we are dedicated to delivering tailored
                consultancy services that drive efficiency and growth. With a
                team of seasoned experts in various fields, we leverage our
                knowledge and experience to empower organizations like yours to
                reach their full potential. Our team's commitment to excellence
                allows us to deliver solutions that not only meet but exceed
                your expectations.
              </span>
              <span className="p-5 px-6 md:px-30">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <IoSettingsOutline size={40} />
                    <p className="text-xs lg:text-sm">
                      Best Services
                      <p className="text-xs lg:text-sm">
                        We can deliver a high-quality <br /> product that meets
                        your needs.
                      </p>
                    </p>
                  </div>

                  <div>
                    <button className="text-sm hover:cursor-pointer p-2  md:text-base md:px-5 md:py-2 lg:text-lg lg:p-3 border bg-white text-black border-white rounded-3xl  hover:bg-white hover:text-black transition">
                      <Link to="/about"> View More {">"}</Link>
                    </button>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  text-black py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10  text-center">
          <div className="border-r border-indigo-600 ">
            <FontAwesomeIcon
              icon={faProjectDiagram}
              className="text-3xl  text-indigo-600 mb-2"
            />
            <Counter target={50} />
            <p className="uppercase tracking-wide text-black text-sm ">
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
      <div
        ref={whyChooseRef}
        className="h-50 flex px-10 bg-white items-center font-['Syne',_sans-serif]"
      >
        <h1
          className={`text-7xl font-extrabold mr-30 transition-all duration-1000 transform ${
            whyChooseInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Why Choose Us
        </h1>
      </div>

      <div className="font-sans min-h-screen bg-black">
        {/* About Us Content */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full max-w-6xl">
            {/* Text Section - LEFT SIDE */}
            <div className="w-full md:w-1/2 py-20 flex flex-col font-['Syne',_sans-serif] text-white pr-10">
              <button className=" border border-white w-fit p-2 rounded-2xl ml-5 ">
                <p className="text-white ">WHY CHOOSE US</p>
              </button>
              <h1 className="text-4xl p-5 font-semibold leading-tight">
                <span>Your Goals. Our Expertise. </span>
                <br />
                <span>One Mission</span>
              </h1>

              <p className="p-5 text-lg max-w-2xl leading-relaxed">
                Professionals of the industry with an abundance of knowledge and
                expertise make up our team. We customize our services to fit
                your specific business goals. We prioritize quality in every
                project, ensuring optimal results for our clients. Your success
                is our mission, and we work collaboratively to achieve your
                goals.
              </p>

              <div className="p-5 flex justify-between">
                <div className="flex items-center gap-2">
                  <IoSettingsOutline size={40} />
                  <div>
                    <p>Ready to elevate your business?</p>
                    <p className="text-xs">
                      Contact us today to schedule a consultation.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="text-lg border bg-white text-black border-white rounded-3xl py-3 px-5 hover:bg-white hover:text-black transition">
                    <Link to="/contact"> Contact Us</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Image Section - RIGHT SIDE */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center">
              <div className="absolute top-0 left-0 right-0 bottom-0 opacity-75 rounded-tl-[8rem] rounded-br-[8rem] overflow-hidden"></div>
              <img
                src={why}
                alt="Illustrator"
                className="relative w-[80%] h-[100%] object-cover rounded-[8rem] rounded-br-[8rem] translate-y-[-170px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit p-20 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-20 text-black">
            Improve and Innovate with the Use of Technology Trends
          </h1>
          <div className="grid grid-cols-4 gap-x-6 gap-y-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center relative bg-opacity-10 rounded-xl p-4 shadow-md backdrop-blur-sm border border-gray-400"
                animate={controls}
              >
                <div className="absolute -top-8 flex items-center justify-center bg-black rounded-full w-16 h-16 overflow-hidden">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-8 text-black font-semibold">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-white text-black rounded-full shadow-md hover:bg-[#e5e5e5] cursor-pointer transition z-50"
        >
          <FaCircleChevronUp size={40} />
        </button>
      )}
    </div>
  );
};

export default HeroSection;
