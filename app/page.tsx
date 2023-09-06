"use client";

import { motion } from "framer-motion";
import { useState } from "react";

let slides = [1, 2, 3, 4, 5, 6];

export default function Home() {
  let [activeIndex, setActiveIndex] = useState(0);

  function prev() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }
  function next() {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <button className="p-1 text-lg" onClick={prev}>
        ️🔼
      </button>

      <div className="h-20 w-20 overflow-hidden">
        <motion.div animate={{ y: -80 * activeIndex }}>
          {slides.map((slide) => (
            <div
              className="flex h-20 w-20 items-center justify-center bg-sky-500 text-white"
              key={slide}
            >
              Slide {slide}
            </div>
          ))}
        </motion.div>
      </div>

      <button className="p-1 text-lg" onClick={next}>
        ⬇️
      </button>
    </div>
  );
}
