import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/bg5.png";
import bg1 from "../assets/s1.png";
import bg2 from "../assets/s2.png";
import bg3 from "../assets/s3.png";
import bg4 from "../assets/s4.png";
import bg5 from "../assets/s5.png";
import bg6 from "../assets/s6.png";
import bg7 from "../assets/s7.png";
import bg8 from "../assets/s8.png";
import bg9 from "../assets/s9.png";
import { BsCalendarCheck } from "react-icons/bs";
import ServiceBox from "./ServiceBox";
import { MdBusinessCenter } from "react-icons/md";
import { FaSalesforce } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiJirasoftware } from "react-icons/si";
import { BiSolidCheckShield, BiSolidReport } from "react-icons/bi";
import { MdModelTraining } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import AnimatedBlock from "./AnimatedBlock";
import why from "../assets/why.png";
import { useInView } from "react-intersection-observer";
import { IoSettingsOutline } from "react-icons/io5";

const serviceData = [
  {
    icon: GrServices,
    bgImage: bg1,
    number: "01",
    title: "IT Management",
    description:
      "In the vibrant and rapidly evolving business landscape of Hyderabad, effective IT management...",
  },
  {
    icon: MdBusinessCenter,
    bgImage: bg2,
    number: "02",
    title: "Business Intelligence",
    description:
      "In today's information-driven world, leveraging business intelligence (BI) is essential to make informed...",
  },
  {
    icon: FaSalesforce,
    bgImage: bg3,
    number: "03",
    title: "Salesforce CRM",
    description:
      "Unlock the full potential of your business with our expert Salesforce CRM development services... ",
  },
  {
    icon: SiJirasoftware,
    bgImage: bg4,
    number: "04",
    title: "Software Development",
    description:
      "In today’s digital age, having robust software solutions is essential for any business looking to thrive...",
  },
  {
    icon: DiGoogleAnalytics,
    bgImage: bg5,
    number: "05",
    title: "Data Analytics",
    description:
      "At Anasol Consultancy Services, we empower businesses to make informed decisions by delivering cutting-edge.....",
  },
  {
    icon: FaPeopleGroup,
    bgImage: bg6,
    number: "06",
    title: "HRMS",
    description:
      "At Anasol Consultancy Services, we specialize in delivering cutting-edge Human Resource Management Solutions (HRMS)...",
  },
  {
    icon: BiSolidCheckShield,
    bgImage: bg7,
    number: "07",
    title: "Testing",
    description:
      "At Anasol Consultancy Services, we understand the critical role that quality assurance plays in the success of any software application...",
  },
  {
    icon: MdModelTraining,
    bgImage: bg8,
    number: "08",
    title: "Internship training",
    description:
      "At Anasol Consultancy Services, we recognize that hands-on experience is crucial for career growth. Our internship training program.....",
  },
  {
    icon: HiSpeakerphone,
    bgImage: bg9,
    number: "09",
    title: "Digital Marketing",
    description:
      "At Anasol Consultancy Services, we prepare individuals to thrive in the digital era by delivering comprehensive digital marketing training...",
  },
];
const ServiceMain = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: ServiRef, inView: ServiInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="font-['Syne',_sans-serif]">
      <div
        className="relative w-full h-screen bg-cover bg-top"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1
            className={`text-2xl md:text-7xl font-extrabold font-['Syne',_sans-serif] leading-tight text-white mb-6 transition-opacity duration-2000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Services
          </h1>
          <div
            className={`px-6 py-2 rounded-full text-lg font-medium transition-opacity duration-2000 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link to="/">
              <span>Home</span>
            </Link>           <span className="mx-2">/</span>{" "}
            <span className="font-['Syne',_sans-serif]">Services</span>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200 lg:bg-black to-indigo-800 min-h-screen px-4 py-15 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-7 py-5">
          {serviceData.map((item, index) => (
            <AnimatedBlock
              key={index}
              delay={index * 0.05}
              direction="up"
              className="w-full"
            >
              <ServiceBox
                icon={item.icon}
                bgImage={item.bgImage}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            </AnimatedBlock>
          ))}
        </div>
      </div>

      <div
        ref={whyChooseRef}
        className="h-80 flex px-10 bg-white items-center font-['Syne',_sans-serif]"
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
        <div className="relative h-fit flex items-center justify-center">
          {/* Main container */}
          <div className="w-full max-w-6xl flex flex-col md:flex-row">
            {/* Left side for md+: Image */}

            {/* Right side for md+: Text */}
            <div className="md:w-auto py-20 flex flex-col font-['Syne',_sans-serif] text-white">
              {/* Wrapper for About button + Heading */}
              <div className="flex flex-col px-6 md:px-30">
                <button>
                  <span className="text-white border border-white py-2 px-4 rounded-2xl lg:ml-50">
                    Why Choose Us
                  </span>
                </button>

                <h1 className="text-2xl pt-5 md:ml-20 md:text-3xl lg:text-4xl lg:ml-130 font-semibold leading-tight whitespace-nowrap">
                  <span>Your Goals. Our Expertise. </span>
                  <br />
                  <span>One Mission</span>
                </h1>
              </div>
              <div className="relative py-10  md:w-1/2 flex items-center justify-center">
                <img
                  src={why}
                  alt="Illustrator"
                  className="w-[80%]  md:w-[80%] lg:w-[75%] lg:h-[85%] lg:mr-110 md:ml-100 lg:mb-10    object-cover rounded-[2rem] md:rounded-[4rem] lg:-translate-y-[350px]"
                />
              </div>

              {/* Wrapper for Paragraph + Icons + Button */}
              <div className="flex flex-col px-6 md:px-30 mt-5 gap-6 lg:ml-[500px] lg:-mt-[800px]">
                <p className="p-5 text-lg max-w-2xl leading-relaxed">
                  Professionals of the industry with an abundance of knowledge
                  and expertise make up our team. We customize our services to
                  fit your specific business goals. We prioritize quality in
                  every project, ensuring optimal results for our clients. Your
                  success is our mission, and we work collaboratively to achieve
                  your goals.
                </p>

                <div className="p-5 flex gap-10 justify-between">
                  <div className="flex items-center gap-4">
                    <IoSettingsOutline size={40} />
                    <div>
                      <p>Ready to elevate your business?</p>
                      <p className="text-xs">
                        Contact us today to schedule a consultation.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="text-lg border bg-white text-black border-white rounded-3xl p-3 hover:bg-white hover:text-black transition whitespace-nowrap">
                      <Link to="/contact">Contact Us</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        ref={ServiRef}
        className="w-full h-fit bg-white font-['Syne',_sans-serif] px-4 sm:px-10 py-16 flex flex-col sm:flex-row items-center justify-center"
      >
        <div className="max-w-3xl text-center sm:text-left">
          <h1
            className={`text-xl font-normal transition-all duration-1000 transform ${
              ServiInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="block mb-8 text-3xl sm:text-5xl font-bold leading-tight">
              Elevate Your Business with Expert Services
            </span>
            Let’s transform your IT infrastructure and unlock your organization’s true potential. Whether you're aiming to streamline operations or boost digital growth, Anasol Consultancy is your trusted partner. Contact us today to learn more about our IT management services in Uppal, Hyderabad — and take your business confidently into the future.
          </h1>

          <button className="text-lg bg-gray-800 mt-10 hover:bg-gray-700 text-white py-5 px-8 rounded-full flex items-center gap-2 mx-auto sm:mx-0 animate-bounce">
            <Link to="/contact" className="flex gap-2 items-center">
              <BsCalendarCheck />
              Get In Touch
            </Link>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default ServiceMain;
