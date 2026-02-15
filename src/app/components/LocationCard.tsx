"use client";

import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import translations from "./content/translations";

const LocationCard = ({ lang } : { lang: "en" | "pt" }) => {
  const [zoomLevel, setZoomLevel] = useState(2);

  const increaseZoom = () => {
    setZoomLevel((prevZoom) => prevZoom - 1);
  };

  const decreaseZoom = () => {
    setZoomLevel((prevZoom) => prevZoom + 1);
  };

  return (
    <div
      className={`bento-card aspect-5/3 
        ${zoomLevel === 1 ? "bg-[url('/map/zoom1-light.png')] dark:bg-[url('/map/zoom1-dark.png')]" : zoomLevel === 2 ? "bg-[url('/map/zoom2-light.png')] dark:bg-[url('/map/zoom2-dark.png')]" : "bg-[url('/map/zoom3-light.png')] dark:bg-[url('/map/zoom3-dark.png')]"}
        bg-cover bg-center bg-no-repeat bg-
        flex justify-between relative
        group/location`}
    >
      <span className="absolute inset-0 bg-primary/10 dark:bg-navyblack/40 pointer-events-none rounded-4xl z-0" />

      <span className="bg-white dark:bg-navyblack mx-auto px-8 py-2 rounded-b-xl shadow-md z-10">
        <h3 className="card-subtitle font-serif">{translations[lang].about.location.title}</h3>
      </span>

      {zoomLevel === 2 || zoomLevel === 3 ? (
        <button
          className="rounded-full bg-white dark:bg-navyblack grid place-items-center w-11 h-11 border border-black/30 dark:border-white/30 hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer absolute right-4 bottom-4 z-10"
          onClick={increaseZoom}
        >
          <IoIosAdd className="h-8 w-8" />
        </button>
      ) : null}
      {zoomLevel === 1 || zoomLevel === 2 ? (
        <button
          className="rounded-full bg-white dark:bg-navyblack grid place-items-center w-11 h-11 border border-black/30 dark:border-white/30 hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer absolute left-4 bottom-4 z-10"
          onClick={decreaseZoom}
        >
          <IoIosRemove className="h-8 w-8" />
        </button>
      ) : null}

      <span className="absolute rounded-full opacity-40 bg-primary dark:bg-primarydark w-15 h-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute rounded-full opacity-80 bg-primary dark:bg-primarydark w-15 h-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></span>
    </div>
  );
};

export default LocationCard;
