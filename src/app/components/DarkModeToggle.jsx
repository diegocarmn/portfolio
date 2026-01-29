"use client";
import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const iconSize = 20;

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
      <button
        className="inline-flex items-center rounded-full px-2 py-2
        active:scale-95 transition-all duration-150 cursor-pointer"
        onClick={() => setIsDarkMode((d) => !d)}
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
              ease: [0.4, 0, 0.2, 1], // ease-in-out suave
            }}
            className="flex items-center justify-center"
          >
            {isDarkMode ? (
              <MdSunny size={iconSize} />
            ) : (
              <RiMoonClearFill size={iconSize} />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
    );
}