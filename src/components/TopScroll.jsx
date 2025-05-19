import React,{useState,useEffect} from 'react'
import { FaCircleChevronUp } from "react-icons/fa6";

const TopScroll = () => {
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
  return (
    <div>
              {showButton && (
                <button
                  onClick={scrollToTop}
                  className="fixed bottom-10 right-10 bg-white text-black rounded-full shadow-md hover:bg-[#e5e5e5] cursor-pointer transition z-50"
                >
                  <FaCircleChevronUp size={45} />
                </button>
              )}
      
    </div>
  )
}

export default TopScroll
