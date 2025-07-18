"use client";

import React, { useState } from "react";
import { outfit } from "../fonts";
import DarkModeToggle from "./DarkModeToggle";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-20 fixed top-0 left-0 flex bg-white md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent w-full py-3 md:py-0 md:flex">
      <div className="flex items-center justify-between px-4">
        <h1
          className={`order-2 md:order1 pl-3 text-center font-semibold text-black/90 dark:text-white whitespace-nowrap md:pl-4 ${outfit.className}`}
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
                    md:static absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent text-black md:text-white md:justify-end md:pr-4 ${
                      outfit.className
                    }`}
      >
        <li>
          <a
            href="#main"
            className="block px-4 py-5 text-black dark:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#main"
            className="block px-4 py-5  text-black/50 dark:text-white/50"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#main"
            className="block px-4 py-5 dark:text-white/50 text-black/50 "
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#main"
            className="block px-4 py-5 text-black/50 dark:text-white/50"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#main"
            className="block px-4 py-5  text-black/50 dark:text-white/50"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="w-full md:w-fit md:mr-4 text-right flex justify-end">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
