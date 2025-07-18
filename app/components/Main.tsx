"use client";

import React from "react";
import VantaBackground from "./VantaBackground";
import { outfit, montserrat } from "../fonts";
import Button from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Reveal from "./Reveal";
import Marquee from "react-fast-marquee";
import ReactIcon from "./icons/react.svg";
import JSIcon from "./icons/javascript.svg";
import BootstrapIcon from "./icons/bootstrap.svg";
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
      color: "text-black/20 dark:text-white/20",
    },
    {
      Icon: JSIcon,
      color: "text-black/20 dark:text-white/20",
    },
    {
      Icon: BootstrapIcon,
      color: "text-black/20 dark:text-white/20",
    },
    { Icon: GitIcon, color: "text-black/20 dark:text-white/20" },
    {
      Icon: HtmlIcon,
      color: "text-black/20 dark:text-white/20",
    },
    {
      Icon: NextIcon,
      color: "text-black/20 dark:text-white/20",
    },
    {
      Icon: TailwindIcon,
      color: "text-black/20 dark:text-white/20",
    },
    {
      Icon: ViteIcon,
      color: "text-black/20 dark:text-white/20",
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
              <span className="animate-gradient bg-gradient-to-r from-[#4a00e0] via-[#ff0080] to-[#ffae00] dark:from-[#00ffff] dark:via-[#a875ff] dark:to-[#ff4fbd] bg-clip-text text-transparent">
                Diego
              </span>
            </h1>

            <p
              className={`mt-0 md:text-[45px] text-[20px] font-medium md:font-extralight ${montserrat.className}`}
            >
              A
              <Typewriter
                words={[" Front-End Developer"]}
                loop={1}
                cursor
                cursorStyle="|"
              />
            </p>
            <p
              className={`mt-2 md:text-xl text-sm text-black/70 dark:text-white/70 ${outfit.className}`}
            >
              I create{" "}
              <span
                className="font-semibold animate-gradient bg-gradient-to-r from-[#4a00e0] via-[#ff0080] to-[#ffae00] 
                bg-clip-text text-transparent dark:from-[#00ffff] dark:via-[#a875ff] dark:to-[#ff4fbd]"
              >
                beautiful
              </span>
              , responsive, and modern web experiences.
            </p>

            <div className="md:pt-7 pt-5">
              <Button
                text="LinkedIn"
                icon={FaLinkedin}
                link="https://www.linkedin.com/in/diegocarmn/"
              />
              <Button
                text="Github"
                icon={FaGithub}
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
