import Image from "next/image";
import ProjectsCardTag from "./ProjectsCardTag";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import IconButton from "./IconButton";

const ProjectsCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-4xl border border-black/10 dark:bg-black dark:border-white/10 shadow-md p-3 md:p-4 mt-4 mx-4 text-left sm:max-w-140">
      <Image
        src="/mockupcineai.png"
        alt="CineAI project screenshot"
        width={500}
        height={300}
        className="w-full h-auto rounded-t-3xl object-cover"
      />
      <Image
        src="/logo-cineai.png"
        alt="CineAI project logo"
        width={40}
        height={40}
        className="outline-white outline-4 relative -top-6 left-4 md:left-5 rounded bg-white w-10 h-10
            sm:w-12 sm:h-12
            md:w-12 md:h-12"
      />
      <h3 className="pb-4 font-serif font-medium tracking-tight text-3xl sm:text-4xl">
        CineAI.
      </h3>
      <p className="text-sm text-balance opacity-90 sm:text-base">
        CineAI is a movie discovery platform that uses Artificial Intelligence
        to make recommendations based on user behavior, taste and mood.
      </p>
      <span className="w-full border-t border-black/30 mt-2"></span>
      <span className="py-4">
        <ProjectsCardTag text="Next.js" />
        <ProjectsCardTag text="TypeScript" />
        <ProjectsCardTag text="React" />
        <ProjectsCardTag text="Tailwind CSS" />
        <ProjectsCardTag text="AI API" />
        <ProjectsCardTag text="Auth.js" />
        <ProjectsCardTag text="PostgreSQL" />
      </span>
      <span className="grid grid-cols-[1fr_auto] items-center gap-2 pt-2">
        <Button
          link="https://aicine.vercel.app"
          target="_blank"
          icon={<IoIosArrowForward className="h-4 w-4" />}
          variant="secondary"
        >
          View website
        </Button>
        <IconButton
          link="https://github.com/diegocarmn/cineai"
          target="_blank"
          icon={<FiGithub className="h-4 w-4" />}
        />
      </span>
    </div>
  );
};

export default ProjectsCard;
