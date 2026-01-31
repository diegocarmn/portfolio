"use client";

import Navbar from "./components/Navbar";
import VantaBackground from "./components/VantaBackground";
import React from "react";

export default function Home() {
  const homeRef = React.useRef<HTMLDivElement | null>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const sections = [
      homeRef.current,
      projectsRef.current,
      aboutRef.current,
      contactRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, 
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        activeSection={activeSection}
      />
      <main className="text-black dark:text-white bg-white font-sans">
        <VantaBackground>
          <section
            id="home"
            ref={homeRef}
            className="flex flex-col w-full h-screen justify-center px-4 sm:px-10 sm:mx-auto md:max-w-5xl lg:max-w-6xl md:px-20"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight ">
              Diego Carmona
              <br />
              Front-end developer
            </h1>

            <p className="pt-5 text-sm sm:text-lg text-balance font-medium">
              Mainly working in the JavaScript ecosystem, I’m a dedicated
              problem-solver who thrives on learning and building.
            </p>
          </section>
        </VantaBackground>
        <div ref={projectsRef} className="h-screen bg-blue-200 dark:bg-gray-900" id="projects">
          <p className="text-black">Projects</p>
        </div>
        <div ref={aboutRef} className="h-screen bg-green-200 dark:bg-gray-800" id="about">
          <p className="text-black">About</p>
        </div>
        <div ref={contactRef} className="h-screen bg-red-200 dark:bg-gray-700" id="contact">
          <p className="text-black">Contact</p>
        </div>
      </main>
    </>
  );
}
