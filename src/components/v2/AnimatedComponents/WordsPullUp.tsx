"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface WordsPullUpProps {
  words: string;
}

const WordsPullUp: React.FC<WordsPullUpProps> = ({ words }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.span variants={container} initial="hidden" animate="show">
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "0.5rem" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WordsPullUp;
