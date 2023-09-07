"use client";

import React from "react";
import { motion } from "framer-motion";

interface MenuToggleProps {
  toggle: () => void;
}

interface PathProps {
  d?: string;
  variants?: {};
  transition?: {};
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button
    aria-label="toggle menu"
    name="toggle"
    className="btn focus:outline-none"
    onClick={toggle}
  >
    <svg className="h-6 w-6" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);