"use client";

import Navbar from "./components/Navbar";
import VantaBackground from "./components/VantaBackground";
import React from "react";
import StatusBadge from "./components/StatusBadge";
import Button from "./components/Button";
import ProjectsCard from "./components/ProjectsCard";
import {
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import BentoGrid from "./components/BentoGrid";
import LogoButton from "./components/LogoButton";
import translations from "./components/content/translations";

export default function Home() {
  const homeRef = React.useRef<HTMLElement | null>(null);
  const projectsRef = React.useRef<HTMLElement | null>(null);
  const aboutRef = React.useRef<HTMLElement | null>(null);
  const contactRef = React.useRef<HTMLElement | null>(null);

  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const [lang, setLang] = React.useState<"en" | "pt">("en");

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
        lang={lang}
        setLang={setLang}
      />
      <main className="text-black dark:text-white bg-bglight dark:bg-bgdark font-sans">
        <VantaBackground>
          <section
            className="w-full h-screen px-4 pb-4 md:px-5 md:pb-5 flex items-center justify-center relative"
            id="home"
            ref={homeRef}
          >
            <div className="w-full h-full rounded-b-4xl outline-50 outline-bglight dark:outline-bgdark">
              <section
                className="
                w-full h-full md:max-w-6xl 
                flex flex-col justify-center
                px-4 sm:px-10 md:px-20 md:mx-auto
                "
              >
                <StatusBadge lang={lang} />

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight">
                  {translations[lang].hero.name}
                  <br />
                  {translations[lang].hero.title}
                </h1>

                <p className="py-5 card-text text-balance">
                  {translations[lang].hero.subtitle}

                </p>

                <div className="flex gap-2 sm:gap-4 items-center">
                  <LogoButton
                    link="https://github.com/diegocarmn"
                    logo={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        color="currentColor"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" />
                        <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" />
                      </svg>
                    }
                    target="_blank"
                    title="GitHub"
                  ></LogoButton>

                  <LogoButton
                    link="https://www.linkedin.com/in/diegocarmn/"
                    logo={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        color="currentColor"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 10V17" />
                        <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" />
                        <path d="M7.00801 7L6.99902 7" />
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      </svg>
                    }
                    target="_blank"
                    title="LinkedIn"
                  ></LogoButton>

                  <LogoButton
                    link="mailto:diegoncarmona@gmail.com"
                    logo={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        color="currentColor"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" />
                        <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
                      </svg>
                    }
                    title="Email"
                  ></LogoButton>

                  <Button
                    onClick={() => {
                      contactRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    icon={<IoIosArrowForward className="h-4 w-4" />}
                    variant="primarySmall"
                  >
                    {translations[lang].hero.button}
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
          className="h-fit bg-bglight dark:bg-bgdark px-4 sm:px-8 flex flex-col items-center pt-4 md:pt-8 xl:mt-30"
          id="projects"
        >
          <h2
            className="sm:px-10 sm:mx-auto md:max-w-7xl lg:max-w-8/9 md:px-20 text-center mb-4 md:pb-4
            text-black dark:text-white font-serif text-5xl tracking-tight font-medium md:text-6xl"
          >
            {translations[lang].projects.title}
          </h2>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-4 md:gap-8 md:max-w-full">
            <ProjectsCard
              mockupImage="/mockupcineai.png"
              logoImage="/logo-cineai.png"
              title={translations[lang].projects.cineai.title}
              description={translations[lang].projects.cineai.description}
              subtitle={translations[lang].projects.cineai.subtitle}
              overview={translations[lang].projects.cineai.overview}
              features={translations[lang].projects.cineai.features}
              tags={translations[lang].projects.cineai.tags}
              websiteLink="https://aicine.vercel.app"
              githubLink="https://github.com/diegocarmn/cineai"
              lang={lang}
            />
            <ProjectsCard
              mockupImage="/mockuppitada.png"
              logoImage="/logo-pitada.png"
              title={translations[lang].projects.pitada.title}
              description={translations[lang].projects.pitada.description}
              subtitle={translations[lang].projects.pitada.subtitle}
              overview={translations[lang].projects.pitada.overview}
              features={translations[lang].projects.pitada.features}
              tags={translations[lang].projects.pitada.tags}
              websiteLink="https://pitada.vercel.app"
              githubLink="https://github.com/diegocarmn/pitada"
              lang={lang}
            />
          </div>
        </section>
        <section
          ref={aboutRef}
          className="h-fit bg-bglight dark:bg-bgdark px-4 sm:px-8 flex flex-col items-center pt-4 md:pt-8 xl:mt-30"
          id="about"
        >
          <h2
            className="sm:px-10 sm:mx-auto md:max-w-7xl lg:max-w-8/9 md:px-20 text-center mb-4 md:pb-4
            text-black dark:text-white font-serif text-5xl tracking-tight font-medium md:text-6xl"
          >
            {translations[lang].about.title}
          </h2>
          <BentoGrid lang={lang} />
        </section>
        <section
          ref={contactRef}
          className="h-screen bg-primary dark:bg-navyblack rounded-4xl
          border-b-4 border-navyblack/30 dark:border-primarydark 
          flex flex-col items-center
          px-4 sm:px-8 mx-4 mt-4 md:mt-8 xl:mt-30"
          id="contact"
        >
          <h2
            className="sm:px-10 sm:mx-auto md:max-w-7xl lg:max-w-8/9 md:px-20 text-center my-4 md:my-8 md:pb-4
            text-white dark:text-white font-serif text-5xl tracking-tight font-medium md:text-6xl"
          >
            {translations[lang].contact.title}
          </h2>
        </section>
      </main>
      <footer className="bg-bglight dark:bg-bgdark h-50 items-center justify-center flex">
        <p className="opacity-50 text-center font-sans font-semibold tracking-tight text-sm text-black dark:text-white py-4">
          &copy; {new Date().getFullYear()} Diego Carmona. {translations[lang].footer.text}
        </p>
      </footer>
    </>
  );
}
