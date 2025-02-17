import { useState } from "react";
import { our_values } from "../data";
import { XDivMotion, YDivMotion } from "./DivMotion";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const OurValues = () => {
  const [active, setActive] = useState(0);
  const [activeData, setActiveData] = useState({
    label: our_values[0].label,
    description: our_values[0].description,
  });

  // Function to handle previous value
  const handlePrevious = () => {
    const newIndex = active === 0 ? our_values.length - 1 : active - 1;
    setActiveData(our_values[newIndex]);
    setActive(newIndex);
  };

  // Function to handle next value
  const handleNext = () => {
    const newIndex = (active + 1) % our_values.length;
    setActiveData(our_values[newIndex]);
    setActive(newIndex);
  };

  // Handle direct click on buttons
  const handleClick = (index, data) => {
    setActiveData(data);
    setActive(index);
  };

  return (
    <section className="bg-[#38b6ff] w-full gilroy">
      <div className="mx-auto max-w-4xl py-16 text-white w-full relative">
        {/* Left Chevron for Previous */}
        <XDivMotion
          initial={-30}
          className="absolute left-0 md:-left-10 top-[40%]"
        >
          <FaCircleChevronLeft
            size={27}
            onClick={handlePrevious}
            className="cursor-pointer"
          />
        </XDivMotion>

        {/* Right Chevron for Next */}
        <XDivMotion className="absolute right-0 md:-right-10 top-[40%]">
          <FaCircleChevronRight
            size={27}
            onClick={handleNext}
            className="cursor-pointer"
          />
        </XDivMotion>

        <XDivMotion initial={-40}>
          <p className="font-bold text-base md:text-xl sm:text-lg">
            Our Values
          </p>
        </XDivMotion>

        <YDivMotion className="mt-20 w-full">
          <svg
            className="h-10 w-10 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            viewBox="0 0 151.6 94.4"
          >
            <path
              d="M76 47.2c0 28.1-13.4 47.2-38.1 47.2-1 0-1.9 0-2.9-.1V69.1c.9.2 1.9.3 2.9.3 8.3 0 12.3-7.1 12.3-22.2S46.2 25 37.9 25c-7.4 0-11.4 5.7-12.1 17.7H0C1.4 17.1 14.6 0 37.9 0 62.6 0 76 19.1 76 47.2zm49.8 20.1l9.2-10.2c8.3-9.2 14.7-16.8 14.7-28.8C149.6 9.7 133.9 0 117.4 0c-13.9 0-26.8 7-33 21.8l22.7 12.4c2.2-5.7 5.8-9.2 10.7-9.2 4.1 0 6.1 2.5 6.1 5.2 0 3.5-3.2 6.2-8.1 11.5L86.3 73.5v18.8h65.3v-25h-25.8z"
              fill="white"
            ></path>
          </svg>

          <div className="w-full flex flex-col justify-center items-center max-w-md mx-auto">
            {/* Animated Label */}
            <motion.h1
              key={activeData.label} // Ensures re-render on change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center w-min"
            >
              {activeData.label}
            </motion.h1>

            {/* Animated Description */}
            <motion.h2
              key={activeData.description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-black text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center w-full mt-7"
            >
              {activeData.description}
            </motion.h2>
          </div>
        </YDivMotion>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full mt-16 mx-auto pb-24">
          {our_values.map((item, index) => (
            <button
              onClick={() => handleClick(index, item)}
              className={`${
                active === index ? "underline" : ""
              } font-black cursor-pointer ease transition-all duration-200 text-base sm:text-lg md:text-xl`}
              key={index}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
