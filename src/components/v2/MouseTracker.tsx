"use client";

import React, { useEffect, useState } from "react";

export default function MouseTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY + scrollY });
    });
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background:
          "radial-gradient(600px at " +
          mousePos.x +
          "px " +
          mousePos.y +
          "px, rgba(89, 78, 216, 0.15), transparent 80%)",
      }}
    ></div>
  );
}
