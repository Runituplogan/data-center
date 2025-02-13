import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const XDivMotion = ({
  children,
  delay = 0,
  initial = 30,
  className,
}) => {
  const divRef = useRef(null);
  const isTextInView = useInView(divRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <motion.div
      ref={divRef}
      initial={{ x: initial, opacity: 0 }}
      animate={isTextInView ? { x: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.9,
        ease: "easeIn",
        delay,
      }}
      className={`${className ? className : "w-full"} `}
    >
      {children}
    </motion.div>
  );
};

export const YDivMotion = ({
  children,
  delay = 0,
  initial = 30,
  className,
}) => {
  const divRef = useRef(null);
  const isTextInView = useInView(divRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <motion.div
      ref={divRef}
      initial={{ y: initial, opacity: 0 }}
      animate={isTextInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.9,
        ease: "easeIn",
        delay,
      }}
      className={`${className ? className : "w-full"} `}
    >
      {children}
    </motion.div>
  );
};
