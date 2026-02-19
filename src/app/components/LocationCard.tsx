"use client";

import { useState, useEffect } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import translations from "./content/translations";
import { motion } from "framer-motion";

const LocationCard = ({ lang }: { lang: "en" | "pt" }) => {
  const [zoomLevel, setZoomLevel] = useState(2);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const backgrounds = {
    1: {
      light: "/map/zoom1-light.png",
      dark: "/map/zoom1-dark.png",
    },
    2: {
      light: "/map/zoom2-light.png",
      dark: "/map/zoom2-dark.png",
    },
    3: {
      light: "/map/zoom3-light.png",
      dark: "/map/zoom3-dark.png",
    },
  };

  const increaseZoom = () => {
    setZoomLevel((prevZoom) => prevZoom - 1);
  };

  const decreaseZoom = () => {
    setZoomLevel((prevZoom) => prevZoom + 1);
  };

  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      className="relative bento-card aspect-5/3 overflow-hidden rounded-4xl group/location"
    >
      {/* Map backgrounds */}
      {[1, 2, 3].map((level) => (
        <motion.div
          key={level}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgrounds[level as 1 | 2 | 3][isDark ? "dark" : "light"]})`,
          }}
          animate={{
            opacity: zoomLevel === level ? 1 : 0,
            scale: zoomLevel === level ? 1 : 1.1,
          }}
          transition={{
            duration: 0.2,
            ease: [1, 1, 0.36, 1],
          }}
        />
      ))}

      {/* Overlay */}
      <span className="absolute inset-0 bg-primary/10 dark:bg-navyblack/40 pointer-events-none rounded-4xl z-5" />

      {/* Title */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-white dark:bg-navyblack px-6 py-2 rounded-b-xl shadow-md z-10">
        <h3 className="card-subtitle font-serif items-center flex gap-2">
          <IoLocationSharp className="h-4 w-4 inline" />
          {translations[lang].about.location.title}
        </h3>
      </span>

      {/* Zoom In Button */}
      {zoomLevel === 2 || zoomLevel === 3 ? (
        <button
          className="rounded-full bg-white dark:bg-navyblack grid place-items-center w-11 h-11 border border-black/30 dark:border-white/30 hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer absolute right-4 bottom-4 z-10"
          onClick={increaseZoom}
        >
          <IoIosAdd className="h-8 w-8" />
        </button>
      ) : null}

      {/* Zoom Out Button */}
      {zoomLevel === 1 || zoomLevel === 2 ? (
        <button
          className="rounded-full bg-white dark:bg-navyblack grid place-items-center w-11 h-11 border border-black/30 dark:border-white/30 hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer absolute left-4 bottom-4 z-10"
          onClick={decreaseZoom}
        >
          <IoIosRemove className="h-8 w-8" />
        </button>
      ) : null}

      {/* Location tooltip */}
      <motion.span
        variants={{
          hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
          visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute z-20 bottom-6 px-4 py-1 bg-white dark:bg-navyblack left-1/2 -translate-x-1/2 card-text opacity-100 font-semibold rounded-4xl text-sm text-black dark:text-white shadow-md"
      >
        {translations[lang].about.location.location}
      </motion.span>

      {/* Location marker */}
      <span className="absolute rounded-full opacity-40 bg-primary dark:bg-primarydark w-15 h-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></span>
      <span className="absolute rounded-full opacity-80 bg-primary dark:bg-primarydark w-15 h-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping z-10"></span>
    </motion.div>
  );
};

export default LocationCard;
