"use client";

import React, { useState } from "react";
import { outfit } from '../fonts'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-20 fixed top-0 left-0 bg-white/10 md:bg-transparent w-full py-3 md:py-0 md:flex">
      <div className="flex items-center justify-between px-4">
        <h1 className={`text-center font-bold text-white whitespace-nowrap md:pl-4 ${outfit.className}`}>Diego Carmona</h1>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {/* Botão hamburger visível apenas em telas menores que md */}
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      <ul
        className={`
                    flex-col md:flex-row md:flex
                    ${open ? "flex" : "hidden"} 
                    md:static absolute top-full left-0 w-full bg-white md:bg-transparent text-black md:text-white md:justify-end md:pr-4 ${outfit.className}`}
      >
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-black md:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-black md:text-white/40">
            About
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-black md:text-white/40">
            Projects
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-black md:text-white/40">
            Skills
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-black md:text-white/40">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
