"use client";

import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect } from "react";
import NavbarButton from "./NavbarButton";

interface NavbarProps {
  homeRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
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
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden sm:flex fixed  left-1/2 -translate-x-1/2 z-50 justify-center gap-2 bg-white/40 dark:bg-black/40 rounded-4xl py-2 px-4 items-center font-sans text-black dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md ${isAtTop ? "top-4 sm:top-8" : "top-2"} transition-top duration-150 shadow`}
      >
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
        <div
          className={`fixed ${isAtTop ? "top-6 right-6" : "top-2 right-3"} z-60 flex gap-2 items-center transition-all duration-150`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2  rounded-4xl ${isAtTop ? "" : `${isOpen ? "" : "border border-black/30 dark:border-white/30 backdrop-blur-md bg-white/30 dark:bg-black/30"} `}   text-black dark:text-white`}
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
            <nav className="flex flex-col gap-8 font-sans text-black dark:text-white text-center items-center">
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
              <DarkModeToggle />
            </nav>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
