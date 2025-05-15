import React, { useState, useEffect, useRef } from "react";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import heroImage from "../assets/bgit.png";
import img from "../assets/itMain.jpg";
import logo from "../assets/Logo1.png";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ServiceData } from "./ServiceData";
const fadeVariant = (direction) => {
  const isMobile = window.innerWidth < 640;

  if (isMobile) {
    return {
      hidden: {
        opacity: 0,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    };
  }

  const offset = 200;
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -offset : offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};



const useScrollAnimation = (dep) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [dep]);

  useEffect(() => {
    setIsVisible(false); // Reset visibility on slug change
  }, [dep]);

  return [ref, isVisible];
};

const servicesList = [
  "IT Management",
  "Business Intelligence",
  "Salesforce CRM",
  "Software Development",
  "Data Analytics",
  "HRMS",
  "Testing",
  "Internship Training",
  "Digital Marketing",
];

const ServiceComponent = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  const { slug } = useParams();
  const service = ServiceData[slug];

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, [slug]);

  const navigate = useNavigate();

  return (
    <div>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .slide-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
          }
          .slide-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
          @keyframes shakeX {
            0% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            50% { transform: translateX(3px); }
            75% { transform: translateX(-2px); }
            100% { transform: translateX(0); }
          }
          .feature-card:hover .feature-icon {
            animation: shakeX 0.4s ease-in-out;

           
          }
          .invisible {
          opacity: 1;
          transform:  translateY(30px);
          }
          .flash-image {
            position: relative;
            overflow: hidden;
            display: inline-block;
          }

          .flash-image::before {
            content: "";
            position: absolute;
            top: 0;
            left: -75%;
            width: 20%;
            height: 100%;
            background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg);
            opacity: 0;
            pointer-events: none;
          }

          .flash-image:hover::before {
            animation: flashEffect 0.5s ease-in-out;
            opacity: 1;
          }

          @keyframes flashEffect {
            0% {
              left: -75%;
              opacity: 0.1;
            }
            30% {
              opacity: 1;
            }
            100% {
              left: 125%;
              opacity: 0;
            }
          }

        `}
      </style>

      <div
        className="relative w-full h-[50vh] bg-cover bg-top"
        style={{ backgroundImage: `url(${heroImage})`, imageRendering: "auto" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1
            className={`text-2xl md:text-7xl font-extrabold font-['Syne',_sans-serif] leading-tight text-white mb-6 transition-opacity duration-2000 ${
              headerVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Services
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-2000 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm ${
              headerVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </span>
            <span className="mx-2">/</span>
            <span
              onClick={() => navigate("/services")}
              className="font-['Syne',_sans-serif] cursor-pointer text-white hover:text-blue-500 transition-colors duration-300"
            >
              Services
            </span>
            <span className="mx-2">/</span>
            <span className="font-['Syne',_sans-serif] cursor-pointer text-white hover:text-blue-500 transition-colors duration-300">
              {service.title}
            </span>
          </div>
        </div>
      </div>
      <div>

      </div>

      <div className="flex justify-center sm:p-15 lg:p-19 pt-10 font-['Syne',_sans-serif] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-11 p-6">
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Title and Description */}
            <AnimatedBlock>
            <h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center break-words"
            >
                {service.title.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} style={{ whiteSpace: "nowrap" }}>
                    {word.split("").map((char, i) => (
                      <span
                        key={i}
                        style={{
                          opacity: 0,
                          animation: "fadeInUp 0.3s ease forwards",
                          animationDelay: `${(wordIndex * 10 + i) * 0.05}s`,
                          display: "inline-block",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {/* add a space between words */}
                    <span>&nbsp;</span>
                  </span>
                ))}
              </h1>

              <FlashImage src={img} alt="Service image with flash effect" />
              <AnimatedBlock>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { delay: 0.1 } },
                  }}
                  className="text-gray-600 mt-4 mb-4"
                >
                  {service.description}
                </motion.p>

                <motion.p
                  initial="hidden"
                  whileInView="show"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                  }}
                  className="text-gray-600 whitespace-pre-line"
                >
                  {service.detailedDescription}
                </motion.p>
              </AnimatedBlock>
            </AnimatedBlock>

            {/* Overview */}
            <AnimatedBlock>
              <h2 className="text-3xl font-semibold mb-2 mt-5">
                Service overview
              </h2>
              <p className="text-gray-600 mb-6 mt-1 ">
                Our mission is to empower businesses size to thrive in an
                ever-changing marketplace.
              </p>
              <motion.div
                className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0 border border-gray-400 divide-x divide-y divide-gray-400"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {service.overviewPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="show"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: idx * 0.05 },
                      },
                    }}
                    className="flex items-start gap-2 p-7 text-sm text-gray-800 font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-[1.01] rounded"
                  >
                    <Check className="text-blue-600 shrink-0" size={18} />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedBlock>

            {/* Bottom Images */}
            <AnimatedBlock>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-6">
                {service.bottomImages.map((img, idx) => (
                  <FlashImage
                    key={idx}
                    src={img}
                    alt={`Bottom section image ${idx + 1}`}
                  />
                ))}
              </div>
            </AnimatedBlock>
          </div>

          {/* Services List & Help */}
          <div className="space-y-6 mt-4 order-1 lg:order-2">
            <AnimatedBlock>
              <div className="border rounded-lg overflow-hidden shadow-sm border-gray-200">
                <div className="border-b px-4 py-3 font-semibold bg-white text-lg text-black border-gray-200">
                  Services List
                  <div className="mt-1 w-8 border-b-4 border-black" />
                  <div className="mt-1 w-4 border-b-2 border-black" />
                </div>
                <div className="flex flex-col gap-2 p-4 bg-white">
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      to={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]/g, "")}`}
                      className={`flex items-center justify-between px-4 py-3 rounded font-medium text-sm cursor-pointer transition-all duration-200 ${
                        slug === service.toLowerCase().replace(/\s+/g, "-") // Check if the service is the current one
                          ? "bg-black text-white" // Active service with a blue background
                          : "bg-blue-50 text-black hover:text-white hover:bg-black" // Default hover effect
                      }`}
                    >
                      {service}
                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock>
              <div className="hidden lg:block relative rounded-lg overflow-hidden shadow-sm h-[400px] w-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col justify-between  p-6 text-white">
                  {/* Top Right Logo */}
                  <div className="absolute top-8">
                    <img src={logo} alt="Logo" className="w-15 h-15" />
                  </div>

                  {/* Bottom Content */}
                  <div className="flex flex-col justify-end h-full mt-25">
                    <h3 className="text-2xl font-bold mb-1">Need help?</h3>
                    <h4 className="text-2xl font-bold mb-2">
                      Feel free contact us
                    </h4>
                    <p className="text-sm text-gray-100 mb-6 max-w-sm">
                      Our mission is to empowers businesses off all size in an
                      businesses.
                    </p>

                    {/* Button and Arrow Wrapper */}

                    <div className="relative inline-block w-fit mt-5">
                      <button className="group relative flex items-center justify-start bg-white text-blue-900 font-semibold py-2 pr-2 pl-2 rounded-full text-sm shadow overflow-hidden">
                        {/* The blue "bubble" that expands */}
                        <span className="flex items-center h-9 bg-blue-600 text-white rounded-full z-0 transition-all duration-300 ease-in-out group-hover:w-full w-9 pl-0 pr-4 overflow-hidden">
                          {/* Arrow stays left */}
                          <span className="flex items-center justify-center min-w-9 h-9">
                            <ArrowRight size={18} />
                          </span>

                          {/* Text that changes color and becomes visible on hover */}
                          <span className="hover:cursor-pointer whitespace-nowrap group-hover:text-white transition-colors duration-300 text-sm font-semibold">
                            <Link to="/contact">Get in touch</Link>
                          </span>
                        </span>
                        {/* <span className="ml-2 group-hover:hidden transition-all duration-100 delay-100"> Get in touch</span> */}
                      </button>
                      {/* Decorative Curved Arrow */}
                      {/* <img
                        src={arrow}
                        alt="Curved Arrow"
                        className="absolute -top-10 -right-9 w-16 h-14 mt-2"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </div>
      
      <div className="bg-white pb-30 px-4 md:px-20">
        <AnimatedBlock>
          <div className="text-center mb-15 flex justify-center">
            <h2 className="text-xl font-bold text-white bg-[#091D31] py-3 px-6 inline-block rounded shadow-md">
              OUR {service.title.toUpperCase()} SERVICES
            </h2>
          </div>
        </AnimatedBlock>
        <div
          key={slug}
          className="space-y-10 flex justify-center flex-col gap-5"
        >
          {service.services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeVariant(service.direction)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20  sm:w-25 sm:h-25 md:w-28 md:h-28 lg:w-40 lg:h-40 rounded-full object-cover shadow-md border-5 border-gray-100 bg-white"
              />
              <div className="mt-4">
                <h3 className="md:text-2xl lg:text-2xl font-bold text-orange-600">
                  {service.title}:
                </h3>
                <p className="xs:text-sm text-md text-gray-700 max-w-xl">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatedBlock>
              <div className="mx-5 md:mx-35 mb-10 lg:hidden relative rounded-lg overflow-hidden shadow-sm md:h-[400px] md:w-[500px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col justify-between  p-6 text-white">
                  {/* Top Right Logo */}
                  <div className="absolute top-8">
                    <img src={logo} alt="Logo" className="w-15 h-15" />
                  </div>

                  {/* Bottom Content */}
                  <div className="flex flex-col justify-end h-full mt-25">
                    <h3 className="text-2xl font-bold mb-1">Need help?</h3>
                    <h4 className="text-2xl font-bold mb-2">
                      Feel free contact us
                    </h4>
                    <p className="text-sm text-gray-100 mb-6 max-w-sm">
                      Our mission is to empowers businesses off all size in an
                      businesses.
                    </p>

                    {/* Button and Arrow Wrapper */}

                    <div className="mt-5">
                    <Link to="/contact">
                      <button className="flex items-center gap-2 bg-white text-blue-900 font-semibold py-2 px-4 rounded-full text-sm shadow transition duration-300 hover:bg-blue-600 hover:text-white">
                        Get in touch
                        <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>



                  </div>
                </div>
              </div>
            </AnimatedBlock>



    </div>
  );
};

// Wrapper Component for Slide Animation
const AnimatedBlock = ({ children }) => {
  const { slug } = useParams();
  const [ref, visible] = useScrollAnimation(slug);

  return (
    <div
      key={slug}
      ref={ref}
      className={`slide-up ${visible ? "visible" : "invisible"}`}
    >
      {children}
    </div>
  );
};

const FlashImage = ({ src, alt }) => (
  <div className="flash-image w-full">
    <img src={src} alt={alt} className="w-full" />
  </div>
);

export default ServiceComponent;
