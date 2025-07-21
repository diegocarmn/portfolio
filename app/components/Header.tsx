"use client";

import React, { useState } from "react";
import { outfit } from "../fonts";
import DarkModeToggle from "./DarkModeToggle";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-20 fixed top-0 left-0 flex bg-white md:bg-transparent dark:bg-black md:dark:bg-transparent w-full py-3 md:py-0 md:flex">
      <div className="flex items-center justify-between px-4">
        <h1
          className={`order-2 md:order-1 pl-3 text-center font-semibold text-black/50 dark:text-white whitespace-nowrap md:pl-4
          ${outfit.className}`}
        >
          Diego Carmona
        </h1>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <p className="dark:text-white">
            <CiMenuBurger />
          </p>
        </button>
      </div>
      <ul
        className={`
                    flex-col md:flex-row md:flex
                    ${open ? "flex" : "hidden"} font-medium
                    md:static absolute top-full left-0 w-full bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent text-black md:text-white md:justify-end md:pr-4 md:py-3 pb-2 ${
                      outfit.className
                    }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <li>
            <a
              href="#main"
              className="block mx-4 md:mx-0 px-4 py-2 text-white dark:text-black dark:bg-white/80 bg-black/70 rounded-4xl border border-white/20 shadow-lg hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30 active:scale-95 transition-all duration-150"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#main"
              className="block mx-4 md:mx-0 px-4 py-2 rounded-4xl hover:shadow-lg dark:hover:text-bl text-black/50 hover:text-white dark:text-white/50 hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30 dark:hover:text-black active:scale-95 transition-all duration-150"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#main"
              className="block mx-4 md:mx-0 px-4 py-2 rounded-4xl hover:shadow-lg dark:hover:text-bl text-black/50 hover:text-white dark:text-white/50 hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30 dark:hover:text-black active:scale-95 transition-all duration-150"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#main"
              className="block mx-4 md:mx-0 px-4 py-2 rounded-4xl hover:shadow-lg dark:hover:text-bl text-black/50 hover:text-white dark:text-white/50 hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30 dark:hover:text-black active:scale-95 transition-all duration-150"
            >
              Contact
            </a>
          </li>
        </div>
      </ul>
      <div className="w-full md:w-fit mr-2 md:mr-4 text-right flex justify-end items-center">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
