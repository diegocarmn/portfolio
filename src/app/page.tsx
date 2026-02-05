"use client";

import Navbar from "./components/Navbar";
import VantaBackground from "./components/VantaBackground";
import React from "react";
import StatusBadge from "./components/StatusBadge";
import Button from "./components/Button";
import ProjectsCard from "./components/ProjectsCard";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import BentoGrid from "./components/BentoGrid";

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
      <main className="text-black dark:text-white bg-bglight dark:bg-bgdark font-sans">
        <VantaBackground>
          <section
            className="w-full h-screen p-3 sm:p-4 md:p-5 flex items-center justify-center relative"
            id="home"
            ref={homeRef}
          >
            <div className="w-full h-full rounded-4xl outline-50 outline-bglight dark:outline-bgdark">
              <section
                className="
                w-full h-full md:max-w-6xl 
                flex flex-col justify-center
                px-4 sm:px-10 md:px-20 md:mx-auto
                "
              >
                <StatusBadge />

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight">
                  Diego Carmona.
                  <br />
                  Full-stack developer.
                </h1>

                <p className="py-5 text-sm sm:text-lg text-balance font-medium opacity-80">
                  Focused on the JavaScript ecosystem, I’m a problem-solver who
                  enjoys learning through building real projects.
                </p>

                <div className="flex gap-2 sm:gap-4">
                  <Button
                    link="https://github.com/diegocarmn"
                    target="_blank"
                    icon={<IoIosArrowForward className="h-4 w-4" />}
                    variant="secondarySmall"
                  >
                    Github
                  </Button>

                  <Button
                    link="https://www.linkedin.com/in/diegocarmn/"
                    target="_blank"
                    icon={<IoIosArrowForward className="h-4 w-4" />}
                    variant="secondarySmall"
                  >
                    Linkedin
                  </Button>

                  <Button
                    onClick={() => {
                      contactRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    icon={<IoIosArrowForward className="h-4 w-4" />}
                    variant="primarySmall"
                  >
                    Contact me
                  </Button>
                </div>

                <button
                  className="
                  flex items-center justify-center
                   w-25 h-12 absolute
                  bottom-15 md:bottom-10
                  left-1/2 rounded-4xl
                  -translate-x-1/2
                  animate-bounce
                  cursor-pointer"
                  onClick={() => {
                    projectsRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  aria-label="Scroll to Projects section"
                >
                  <IoIosArrowDown className="h-8 w-8 sm:h-10 sm:w-10 opacity-70" />
                </button>
              </section>
            </div>
          </section>
        </VantaBackground>
        <section
          ref={projectsRef}
          className="h-fit bg-bglight dark:bg-bgdark px-4 sm:px-8 pb-8 sm:pb-20 flex flex-col items-center pt-8 sm:pt-20 lg:pt-25"
          id="projects"
        >
          <div className="sm:px-10 sm:mx-auto md:max-w-7xl lg:max-w-8/9 md:px-20 text-center mb-4 md:pb-4 lg:pb-8">
            <h2 className="text-black dark:text-white font-serif text-4xl sm:text-5xl tracking-tight font-medium md:text-6xl">
              Projects.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 md:max-w-full">
            <ProjectsCard
              mockupImage="/mockupcineai.png"
              logoImage="/logo-cineai.png"
              title="CineAI."
              description="CineAI is a movie discovery platform that uses Artificial Intelligence to make recommendations based on user behavior, taste and mood."
              subtitle="AI-Powered Movie Discovery Platform"
              overview="CineAI is a full-stack web application focused on AI-driven movie recommendations, combining LLM-based inference with real-time movie data and persistent user state.
              The system adapts recommendations based on user favorites, interaction history, and mood input."
              features={[
                "LLM-powered recommendation engine using Groq (LLaMA models)",
                "Server-side movie search and trending feeds via TMDB API",
                "OAuth authentication with Auth.js (Google provider)",
                "Real-time UI updates, loading states, and resilient error handling",
              ]}
              tags={[
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "Tailwind CSS",
                "AI API",
                "Auth.js",
                "PostgreSQL",
              ]}
              websiteLink="https://aicine.vercel.app"
              githubLink="https://github.com/diegocarmn/cineai"
            />
            <ProjectsCard
              mockupImage="/mockuppitada.png"
              logoImage="/logo-pitada.png"
              title="Pitada."
              description="Pitada helps people figure out what to cook by transforming the ingredients they already have at home into simple, personalized recipes using AI."
              subtitle="Smart Recipe Generator App"
              overview="Pitada is a lightweight, full-stack web application that generates AI-powered recipes from user-provided ingredients. The project focuses on performance, accessibility, and modern web standards, delivering a fast and inclusive cooking assistant experience."
              features={[
                "AI-based recipe generation using Groq LLMs",
                "Ingredient-driven input flow with clean state management",
                "Serverless API endpoint for recipe inference (/api/ai/recipe)",
                "Light/Dark theme support with CSS variables",
                "Fully accessible UI (ARIA, keyboard navigation, semantic HTML)",
                "PWA-ready with installable app experience",
              ]}
              tags={[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "AI API",
                "PWA",
              ]}
              websiteLink="https://pitada.vercel.app"
              githubLink="https://github.com/diegocarmn/pitada"
            />
          </div>
        </section>
        <section
          ref={aboutRef}
          className="h-screen bg-bglight dark:bg-bgdark px-4 sm:px-8 pb-20 flex flex-col items-center pt-8 sm:pt-20 lg:pt-25"
          id="about"
        >
          <div className="sm:px-10 sm:mx-auto md:max-w-7xl lg:max-w-8/9 md:px-20 text-center mb-4 md:pb-4 lg:pb-8">
            <h2 className="text-black dark:text-white font-serif text-4xl sm:text-5xl tracking-tight font-medium md:text-6xl">
              About.
            </h2>
          </div>
          <BentoGrid />
        </section>
        <section
          ref={contactRef}
          className="h-screen bg-bglight dark:bg-bgdark px-4 sm:px-8 pb-20 flex flex-col items-center pt-4 sm:pt-20 lg:pt-25"
          id="contact"
        >
          <div className="sm:px-10 sm:mx-auto md:max-w-7xl lg:max-w-8/9 md:px-20 text-center md:pb-4 lg:pb-8">
            <h2 className="text-black dark:text-white font-serif text-4xl sm:text-5xl tracking-tight font-medium md:text-6xl">
              Contact.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
