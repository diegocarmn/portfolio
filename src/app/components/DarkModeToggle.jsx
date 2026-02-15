"use client";
import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const iconSize = 20;

  // Initialize state from DOM on mount only
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
    setMounted(true);
  }, []);

  // Update DOM when state changes
  const handleToggle = () => {
    const newState = !isDarkMode;
    setIsDarkMode(newState);
    
    if (newState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      className="inline-flex items-center rounded-full px-2 py-2 opacity-75 hover:opacity-100
        active:scale-80 transition-all duration-150 cursor-pointer text-black dark:text-white"
      onClick={handleToggle}
      aria-label="Toggle Dark Mode"
      title={isDarkMode ? "Light Mode" : "Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDarkMode ? "sun" : "moon"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="flex items-center justify-center"
        >
          {isDarkMode ? (
            <MdSunny size={iconSize} />
          ) : (
            <IoMdMoon size={iconSize} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
