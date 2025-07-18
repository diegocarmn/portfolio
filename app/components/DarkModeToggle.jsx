"use client";
import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";

import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);
  const iconSize = 20;

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className="inline-flex items-center gap-2 rounded-full px-2 py-2 
        bg-white/10
        backdrop-blur-md border border-white/20
        hover:bg-black/90 hover:text-white 
        dark:hover:bg-white dark:hover:text-black 
        md:text-lg whitespace-nowrap mr-2 md:mr-4 
        active:scale-95 transition-all duration-150 
        dark:active:bg-white dark:active:text-black text-black/70
        active:bg-black/90 active:text-white dark:text-white
        shadow-lg hover:shadow-lg 
        dark:hover:shadow-white/30"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1], // ease-in-out suave
          }}
          className="flex items-center justify-center"
        >
          {dark ? (
            <MdSunny size={iconSize} />
          ) : (
            <RiMoonClearFill size={iconSize} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
