import Image from "next/image";
import ProjectsCardTag from "./ProjectsCardTag";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

interface ProjectsCardProps {
  mockupImage: string;
  logoImage: string;
  title: string;
  description: string;
  subtitle?: string;
  overview?: string;
  features?: string[];
  tags: string[];
  websiteLink: string;
  githubLink: string;
}

const ProjectsCard = ({
  mockupImage,
  logoImage,
  title,
  description,
  subtitle,
  overview,
  features,
  tags,
  websiteLink,
  githubLink,
}: ProjectsCardProps) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <div
      className="
          flex flex-col
          bg-white rounded-4xl
          border border-black/10
          dark:bg-darkgray dark:border-white/10
          shadow-md
          p-3 md:p-4
          mt-4 mx-auto
          text-left

          w-full h-fit max-w-[90vw]
          sm:max-w-140
          min-w-0
          overflow-hidden

          sm:hover:scale-105
          transition-transform
          duration-300
          "
    >
      <Image
        src={mockupImage}
        alt={`${title} project screenshot`}
        width={500}
        height={500}
        sizes="(max-width: 640px) 100vw, 560px"
        className="w-full max-w-full aspect-video rounded-t-3xl object-cover"
      />
      <Image
        src={logoImage}
        alt={`${title} project logo`}
        width={500}
        height={500}
        className="border-white dark:border-darkgray border-4 md:border-5 relative -top-6 md:-top-9 left-4 md:left-6 rounded-2xl bg-white dark:bg-darkgray w-13 h-13
            sm:w-16 sm:h-16
            lg:w-18 lg:h-18"
      />

      <h3 className="pb-4 font-serif font-medium tracking-tight text-3xl sm:text-4xl sm:mx-2 -top-2 relative">
        {title}
      </h3>

      <p
        className={`sm:mx-2 text-sm opacity-90 sm:text-base sm:font-medium sm:opacity-80 ${isCardExpanded ? "" : "line-clamp-2"}`}
      >
        {description}
      </p>

      <div className="flex flex-row items-center my-2 md:mt-4 sm:mx-2">
        <span className="w-full border-t border-black/30 dark:border-white/30 mt-4 mb-2"></span>
        <button
          onClick={() => setIsCardExpanded(!isCardExpanded)}
          className="
          mx-auto flex-none
          grid place-items-center
          w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
          rounded-full
          bg-white dark:bg-darkgray  
          text-black dark:text-white
          border border-black/30 dark:border-white/30
          hover:scale-110 active:scale-90
          transition-transform duration-200
          cursor-pointer
          "
          title={
            isCardExpanded ? "Collapse card details" : "Expand card details"
          }
        >
          {isCardExpanded ? (
            <IoMdArrowRoundUp className="w-5 h-5" />
          ) : (
            <IoMdArrowRoundDown className="w-5 h-5" />
          )}
        </button>
        <span className="w-full border-t border-black/30 dark:border-white/30 mt-4 mb-2"></span>
      </div>

      {isCardExpanded && (
        <div className="flex flex-col gap-2 md:gap-4 sm:mx-2 md:mt-2">
          {subtitle && (
            <h4 className="font-serif tracking-tight font-semibold text-lg sm:text-xl">
              {subtitle}
            </h4>
          )}
          {overview && (
            <p className="text-sm opacity-90 sm:text-base sm:font-medium sm:opacity-80">
              {overview}
            </p>
          )}
          {features && features.length > 0 && (
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="font-serif tracking-tight font-semibold text-lg sm:text-xl">
                Features
              </h4>

              <ul className="text-sm sm:text-base font-bold flex flex-col gap-3 px-3 sm:px-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <span className="w-full border-t border-black/30 dark:border-white/30 mt-2 mb-2"></span>
            </div>
          )}
        </div>
      )}
      <div className="mt-2 mx-2 min-w-0">
        <ProjectsCardTag tags={tags} singleLine={!isCardExpanded} />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 text-center">
        <Button
          link={githubLink}
          target="_blank"
          icon={<IoIosArrowForward className="h-4 w-4" />}
          variant="primary"
        >
          GitHub
        </Button>
        <Button
          link={websiteLink}
          target="_blank"
          icon={<IoIosArrowForward className="h-4 w-4" />}
          variant="secondary"
        >
          View website
        </Button>
      </div>
    </div>
  );
};

export default ProjectsCard;
