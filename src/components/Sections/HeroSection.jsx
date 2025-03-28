import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Business from "../../assets/business.svg";
import Image from "../../assets/osvity_logo.svg";
import Search from "../../assets/search_icon.svg";
import HeroCard from "../Cards/HeroCard";

const HeroSection = () => {
  const fullText = ", Mentor & Organization"; // Text to animate
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Hide text
      setTimeout(() => setShowText(true), 600);
    }, 11200); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:items-start text-center sm:text-left mt-6 rounded-xl">
      <div className=" flex-1 mb-6 lg:mb-0 w-full">
        <button className="hidden mt-16  lg:flex items-center space-x-2 bg-gradient-to-b from-[#FCFDFF] to-[#F0F5FF] p-[1px] rounded-full px-4 py-2 border">
          < img src={Business} alt="Business" className="h-6 " />
          <p className="text-sm text-[#002B6B]">For Business</p>
        </button>

        <h1 className="text-2xl lg:text-4xl font-bold mt-8 sm:h-20 h-auto w-full text-left">
          <span className="block text-left">This application for</span>

          <span className="block text-[#61B7E6] lg:txt-4xl mt-2 w-full text-left text-xl">
            Student 
            <AnimatePresence mode="wait">
              {showText && (
                <motion.span
                  key={fullText}
                  className="ml-2 text-xl" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {fullText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="text-xl"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </h1>

        <div className="relative sm:w-1/2 w-full sm:my-14 my-6 ">
          <input
            type="text"
            placeholder="Search opportunity"
            className="border p-2 w-full pr-10 rounded-3xl border-[#164481] h-14"
          />
          <img
            src={Search}
            alt="Search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10"
          />
        </div>

        <HeroCard />
      </div>

      <div className="my-4">
        <img src={Image} alt="Student" className="lg:h-140 sm:h-110 h-80" />
      </div>
    </section>
  );
};

export default HeroSection;
