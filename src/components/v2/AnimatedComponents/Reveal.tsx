"use client";

import * as React from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export interface RevealProps {
  children?: React.ReactNode;
  width?: number | string;
}

const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
