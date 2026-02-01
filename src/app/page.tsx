"use client";

import Navbar from "./components/Navbar";
import VantaBackground from "./components/VantaBackground";
import React from "react";
import StatusBadge from "./components/StatusBadge";
import HeroButton from "./components/HeroButton";

export default function Home() {
  const homeRef = React.useRef<HTMLElement | null>(null);
  const projectsRef = React.useRef<HTMLElement | null>(null);
  const aboutRef = React.useRef<HTMLElement | null>(null);
  const contactRef = React.useRef<HTMLElement | null>(null);

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
            className="flex flex-col w-screen h-screen justify-center px-4 sm:px-10 sm:mx-auto md:max-w-5xl lg:max-w-6xl md:px-20"
          >
            <StatusBadge />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight ">
              Diego Carmona.
              <br />
              Front-end developer.
            </h1>

            <p className="py-5 text-sm sm:text-lg text-balance font-medium opacity-80">
              Focused on the JavaScript ecosystem, I’m a problem-solver who
              enjoys learning through building.
            </p>
            <div className="flex gap-2 sm:gap-4">
              <HeroButton link="https://github.com/diegocarmn" target="_blank">
                Github
              </HeroButton>
              <HeroButton
                link="https://www.linkedin.com/in/diegocarmn/"
                target="_blank"
              >
                Linkedin
              </HeroButton>
              <HeroButton link="mailto:diegoncarmona@gmail.com">
                Email
              </HeroButton>
            </div>
          </section>
        </VantaBackground>
        <section
          ref={projectsRef}
          className="h-screen bg-blue-200 dark:bg-gray-900 px-2"
          id="projects"
        >
          <div className="sm:px-10 sm:mx-auto md:max-w-5xl lg:max-w-6xl md:px-20">
            <h2 className="text-black font-serif text-4xl tracking-tight font-medium pt-4 md:pt-20 md:text-6xl ">
              Projects
            </h2>
          </div>
        </section>
        <section
          ref={aboutRef}
          className="h-screen bg-green-200 dark:bg-gray-800"
          id="about"
        >
          <p className="text-black">About</p>
        </section>
        <section
          ref={contactRef}
          className="h-screen bg-red-200 dark:bg-gray-700"
          id="contact"
        >
          <p className="text-black">Contact</p>
        </section>
      </main>
    </>
  );
}
