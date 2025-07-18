"use client";
import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);
  const iconSize = 18;

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className="flex items-center justify-center px-4 py-2 text-black dark:text-white h-full"
      onClick={() => setDark((d) => !d)}
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
          {dark ? <MdSunny size={iconSize} /> : <IoMoon size={iconSize} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
