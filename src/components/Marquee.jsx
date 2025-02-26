import React from "react";
import { motion } from "framer-motion";
import { placements } from "../data";
import radii from "../assets/images/radii.svg";

const Marquee = ({ delay = 0.1, direction = "left" }) => {
  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          delay,
        }}
      >
        {[...placements, ...placements].map((item, index) => (
          <div
            key={index}
            className="px-7 min-w-max py-2 bg-black text-white rounded-lg shadow-md flex justify-between items-center gap-5"
          >
            <img src={radii} alt="radii" className="w-6" />
            <p className="text-base md:text-lg">{item}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
