"use client";

import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  link: string;
  toggle: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ link, toggle }) => {
  return (
    <motion.li
      className="li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnchorLink
        onClick={toggle}
        aria-label={link}
        className="text-xl text-[#ACA9BB] font-Jbrains mb-a"
        href={`#${link}`}
      >
        {link}
      </AnchorLink>
    </motion.li>
  );
};
