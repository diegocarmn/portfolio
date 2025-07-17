import VantaBackground from "./VantaBackground";
import { spaceGrotesk, outfit, montserrat } from "../fonts";
import Button from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <VantaBackground>
      <div className="flex flex-col justify-center text-black/90 dark:text-white h-screen px-5 md:pl-[70px] lg:pl-[220px]">
        <h1
          className={`text-[50px] md:text-[100px] font-bold ${outfit.className}`}
        >
          Hey, I&apos;m Diego
        </h1>
        <p
          className={`mt-0 md:text-[45px] text-[20px] font-medium md:font-extralight ${montserrat.className}`}
        >
          A Front-End Developer
        </p>
        <p
          className={`mt-2 md:text-xl text-sm text-black/70 dark:text-white/70 ${outfit.className}`}
        >
          Creating fast, responsive, and intuitive web experiences.
        </p>
        <div className="md:pt-7 pt-5">
          <Button text="LinkedIn" icon={FaLinkedin} link="https://www.linkedin.com/in/diegocarmn/" />
          <Button text="Github" icon={FaGithub} link="https://github.com/diegocarmn" />
        </div>
      </div>
    </VantaBackground>
  );
}
