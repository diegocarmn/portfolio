"use client";

import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const LocationCard = () => {
  const [zoomLevel, setZoomLevel] = useState< boolean >(false);

  const handleZoom = () => {
    setZoomLevel((prevZoom) => !prevZoom);
  };


  return (
    <div
      className={`bento-card aspect-5/3 
        ${zoomLevel ? "bg-[url('/map/zoom2-light.png')] dark:bg-[url('/map/zoom2-dark.png')]" : "bg-[url('/map/zoom1-light.png')] dark:bg-[url('/map/zoom1-dark.png')]"}
        bg-cover bg-center bg-no-repeat 
        flex justify-between relative`}
    >
      <span className="bg-white dark:bg-navyblack mx-auto px-8 py-2 rounded-b-xl shadow-md ">
        <h3 className="card-subtitle font-serif">Location</h3>
      </span>
      <span className="flex justify-end p-4">
        <button
          className="rounded-full bg-white dark:bg-navyblack grid place-items-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 border border-black/30 dark:border-white/30 hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer"
          onClick={handleZoom}
        >
          {zoomLevel ? (
            <IoIosAdd className="h-8 w-8" />
          ) : (
            <IoIosRemove className="h-8 w-8" />
          )}
        </button>
      </span>
      <span className="absolute rounded-full opacity-70 bg-primary dark:bg-primarydark w-15 h-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute rounded-full bg-primary dark:bg-primarydark w-15 h-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></span>
    </div>
  );
};

export default LocationCard;
