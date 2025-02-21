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
    <section className="bg-[#38b6ff] w-full gilroy px-2 md:px-0">
      <div className="mx-auto max-w-4xl py-16 text-white w-full relative">
        {/* Left Chevron for Previous */}
        <XDivMotion
          initial={-30}
          className="absolute left-0 md:-left-10 top-[40%] sm:block hidden"
        >
          <FaCircleChevronLeft
            size={27}
            onClick={handlePrevious}
            className="cursor-pointer"
          />
        </XDivMotion>

        {/* Right Chevron for Next */}
        <XDivMotion className="absolute right-0 md:-right-10 top-[40%] sm:block hidden">
          <FaCircleChevronRight
            size={27}
            onClick={handleNext}
            className="cursor-pointer"
          />
        </XDivMotion>

        {/* <XDivMotion initial={-40}>
          <p className="font-bold text-base md:text-xl sm:text-lg">
            Our Values
          </p>
        </XDivMotion> */}

        <YDivMotion className="mt-20 w-full">
          <div className="w-full flex flex-col justify-center items-center max-w-lg 2xl:max-w-xl mx-auto">
            {/* Animated Label */}
            <motion.h1
              key={activeData.label} // Ensures re-render on change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] text-center w-full"
            >
              {activeData.label}
            </motion.h1>

            {/* Animated Description */}
            <motion.h2
              key={activeData.description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-black text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center w-full mt-7 text-gray-50"
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
              } font-black cursor-pointer ease transition-all duration-200 text-sm sm:text-base md:text-lg lg:text-xl`}
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
