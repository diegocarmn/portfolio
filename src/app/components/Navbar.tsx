"use client";

import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect, useRef } from "react";
import NavbarButton from "./NavbarButton";

interface NavbarProps {
  homeRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  activeSection: string | null;
}

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

const Navbar = ({
  homeRef,
  projectsRef,
  aboutRef,
  contactRef,
  activeSection,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVisible = useScrollDirection();

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed left-1/2 -translate-x-1/2 top-4 sm:top-8 md:top-5 z-50 justify-center gap-2 bg-white/40 dark:bg-black/40 rounded-4xl py-2 px-4 items-center font-sans text-black dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md transform transition-transform duration-150 ${isVisible ? "translate-y-0" : "-translate-y-20"} shadow`}
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
      <nav className="md:hidden">
        <div
          className={`fixed top-4 right-4 z-60 flex gap-2 items-center transform transition-transform duration-300 bg-white rounded-full border border-black/10 dark:bg-bgdark dark:border-white/10 backdrop-blur-md shadow`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-4xl text-black dark:text-white"
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
          <div className="fixed inset-0 z-50 bg-bglight dark:bg-navyblack backdrop-blur-md flex flex-col items-center justify-center gap-8">
            <nav className="flex flex-col gap-8 font-serif font-bold tracking-tighter text-black dark:text-white text-center items-center">
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
