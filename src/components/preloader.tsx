"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const svgVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    opacity: 1,
    scale: 105,
    transition: {
      duration: 1,
      easings: [0.42, 0, 0.58, 1],
      bounce: 0.5,
      damping: 10,
    },
  },
};

const Preloader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.svg
        className="w-24 h-24"
        viewBox="0 0 426 390"
        fill="none"
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
      >
        <motion.path
          d="M202.486 3.86777L1.00952 360.178C-0.643331 363.101 0.424432 366.811 3.37814 368.409L40.8338 388.665C44.0733 390.417 48.1104 388.84 49.4932 385.427C70.041 334.703 106.002 324.22 122 325.5H295.5C355.477 329.191 364.937 359.985 374.159 385.673C375.373 389.054 379.29 390.521 382.465 388.839L422.302 367.725C424.762 366.421 426.009 363.572 425.219 360.903C403.628 287.95 334.687 260.5 295.5 260.5H138.72C134.03 260.5 131.153 255.36 133.606 251.363L209.739 127.26C211.992 123.588 217.267 123.416 219.754 126.935L271.707 200.462C272.831 202.054 274.659 203 276.607 203H324.285C328.974 203 331.851 197.862 329.4 193.864L212.824 3.68539C210.434 -0.213141 204.736 -0.11263 202.486 3.86777Z"
          fill="white"
        />
      </motion.svg>
    </div>
  );
};

export default Preloader;
