"use client";

import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import NavbarButton from "./NavbarButton";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  activeSection: string | null;
}

const Navbar = ({
  homeRef,
  projectsRef,
  aboutRef,
  contactRef,
  activeSection,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 justify-center gap-2 dark:bg-white/5 rounded-4xl py-2 px-4 items-center font-sans text-black dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md">
        <NavbarButton targetRef={homeRef} active={activeSection === "home"}>
          Home
        </NavbarButton>
        <NavbarButton
          targetRef={projectsRef}
          active={activeSection === "projects"}
        >
          Projects
        </NavbarButton>
        <NavbarButton targetRef={aboutRef} active={activeSection === "about"}>
          About
        </NavbarButton>
        <NavbarButton
          targetRef={contactRef}
          active={activeSection === "contact"}
        >
          Contact
        </NavbarButton>
        <div className="border-l border-black/30 dark:border-white/30 h-6"></div>
        <DarkModeToggle />
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden">
        <div className="fixed top-4 right-4 z-60">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-md text-black dark:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Full Screen */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white dark:bg-black backdrop-blur-md flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-8 font-sans text-black dark:text-white text-center">
              <NavbarButton
                variant="mobile"
                targetRef={homeRef}
                active={activeSection === "home"}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavbarButton>
              <NavbarButton
                variant="mobile"
                targetRef={projectsRef}
                active={activeSection === "projects"}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavbarButton>
              <NavbarButton
                variant="mobile"
                targetRef={aboutRef}
                active={activeSection === "about"}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavbarButton>
              <NavbarButton
                variant="mobile"
                targetRef={contactRef}
                active={activeSection === "contact"}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavbarButton>
            </div>
            <DarkModeToggle />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
