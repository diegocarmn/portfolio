"use client";

import React from "react";
import VantaBackground from "./VantaBackground";
import { outfit, montserrat, spaceGrotesk } from "../fonts";
import Button from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { Typewriter } from "react-simple-typewriter";
import Reveal from "./Reveal";
import Marquee from "react-fast-marquee";
import ReactIcon from "./icons/react.svg";
import JSIcon from "./icons/javascript.svg";
import GitIcon from "./icons/git.svg";
import HtmlIcon from "./icons/html5.svg";
import NextIcon from "./icons/nextdotjs.svg";
import TailwindIcon from "./icons/tailwindcss.svg";
import ViteIcon from "./icons/vite.svg";

import Logo from "./Logo";

export default function Main() {
  const logos = [
  {
    Icon: ReactIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
  {
    Icon: JSIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
  {
    Icon: GitIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
  {
    Icon: HtmlIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
  {
    Icon: NextIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
  {
    Icon: TailwindIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
  {
    Icon: ViteIcon,
    color:
      "text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-300",
  },
];

  return (
    <VantaBackground>
      <main className="flex flex-col h-screen text-black/90 dark:text-white">
        <div className="flex flex-col justify-center py-10 flex-grow px-5 md:pl-[70px] lg:pl-[220px]">
          <Reveal delay={0.2}>
            <h1
              className={`text-[50px] md:text-[100px] font-bold ${outfit.className}`}
            >
              Hey, I&apos;m{" "}
              <span className="">
                Diego
              </span>
            </h1>

            <p
              className={`mt-0 md:text-[45px] text-2xl font-light md:font-normal ${spaceGrotesk.className}`}
            >
              A
              <Typewriter
                words={[" Full-Stack Developer"]}
                loop={1}
                cursor
                cursorStyle="|"
              />
            </p>
            <p
              className={`mt-2 md:text-xl text-md text-black/70 dark:text-white/90 ${outfit.className}`}
            >
              I develop complete digital solutions that solve real-world problems.
            </p>

            <div className="md:pt-7 pt-5">
              <Button
                text="View Projects"
                icon={GrProjects}
                link="https://github.com/diegocarmn"
              />
            </div>
          </Reveal>
        </div>
        <div className="relative my-2 overflow-visible">
          <div className="fade-mask">
            <Marquee gradient={false} speed={40} autoFill={true} pauseOnHover>
              {logos.map(({ Icon, color }, idx) => (
                <Logo key={idx} Icon={Icon} className={color} />
              ))}
            </Marquee>
          </div>
        </div>
      </main>
    </VantaBackground>
  );
}
