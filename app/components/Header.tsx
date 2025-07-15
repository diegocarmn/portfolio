"use client";

import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-20 fixed top-0 left-0 bg-white/20 w-full py-5 md:py-0 md:flex">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-center text-white whitespace-nowrap">Diego Carmona</h1>
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
                    md:static absolute top-full left-0 w-full bg-white/20 md:bg-transparent text-black md:text-white md:justify-end



                `}
      >
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-white">
            Sobre
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-white">
            Projetos
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-white">
            Tecnologias
          </a>
        </li>
        <li>
          <a href="#main" className="block px-4 py-5 hover:underline text-white">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
