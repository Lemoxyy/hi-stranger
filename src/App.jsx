import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HiStrangerTypingSite() {
  const text = "Hi Stranger, Have a good day.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold text-center"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.h1>
    </div>
  );
}
