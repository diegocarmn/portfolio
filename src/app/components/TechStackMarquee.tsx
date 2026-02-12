import Marquee from "react-fast-marquee";
import { SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const TechStackMarquee = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-0 bottom-0 w-15 bg-linear-to-r from-white dark:from-navyblack to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-15 bg-linear-to-l from-white dark:from-navyblack to-transparent z-10 pointer-events-none" />
      <Marquee
        gradient={false}
        speed={40}
        autoFill={true}
        className="flex flex-row items-center font-sans font-bold"
        pauseOnClick={true}
        pauseOnHover={true}
      >
      <span className="flex flex-col items-center px-2 gap-2">
        <SiNextdotjs className="h-10 w-10 opacity-75" /> Next.js
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <SiTypescript className="h-10 w-10 opacity-75" /> TypeScript
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <FaReact className="h-10 w-10 opacity-75" /> React
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <BiLogoPostgresql className="h-10 w-10 opacity-75" /> PostgreSQL
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <FaNodeJs className="h-10 w-10 opacity-75" /> Node.js
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <RiTailwindCssFill className="h-10 w-10 opacity-75" /> Tailwind CSS
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <SiJavascript className="h-10 w-10 opacity-75" /> JavaScript
      </span>
      <span className="flex flex-col items-center px-2 gap-2">
        <FaGitAlt className="h-10 w-10 opacity-75" /> Git
      </span>
    </Marquee>
    </div>
  );
};

export default TechStackMarquee;
