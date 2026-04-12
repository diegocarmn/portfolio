import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/app/types/projects";
import { slideUp, blurUp } from "@/app/motion/animations";
import { HiArrowUpRight } from "react-icons/hi2";

interface ProjectsCardProps {
  onClick: () => void;
  mockupImage: string;
  logoImage: string;
  project: Project;
  spanText: string;
};

{/* Motion variants */}
const peekVariants = {
  rest: { scale: 1, opacity: 0 },
  hover: { scale: 1.015, opacity: 1 },
};

const labelVariants = {
  rest: slideUp.initial,
  hover: slideUp.animate,
};

const hoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const ProjectsCard = ({
  onClick,
  mockupImage,
  logoImage,
  project,
  spanText,
}: ProjectsCardProps) => {
  return (
    <motion.div
      variants={blurUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-full max-w-[90vw] sm:max-w-160 mx-auto"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={hoverVariants}
      >
        <motion.div
          variants={peekVariants}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="
          absolute bottom-0 left-0 right-0
          h-full flex items-end justify-center
          bg-orange-500 dark:bg-primarydark rounded-4xl
          z-0
        "
        ></motion.div>
        <motion.span
          variants={labelVariants}
          className="
          absolute top-10 right-10 z-50
          flex items-center gap-2
          py-2 px-4
          bg-white text-black font-bold text-sm sm:text-base
          border border-black/30
          rounded-full shadow-[0_4px_50px_rgba(0,0,0,0.7)]
          select-none pointer-events-none
          whitespace-nowrap
        "
        >
          {spanText}
          <HiArrowUpRight className="w-4 h-4" />
        </motion.span>

        {/* Projects Card */}
        <div
          className="
          relative z-10
          project-card
          px-3 pt-3 pb-6 md:px-4 md:pt-4
          text-left
          w-full h-fit
          min-w-0
          overflow-hidden
          cursor-pointer
          shadow-md
        "
          onClick={onClick}
          role="button"
          aria-label={project.title}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClick();
          }}
        >
          <Image
            src={mockupImage}
            alt={`${project.title} project screenshot`}
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, 560px"
            className="w-full max-w-full aspect-video rounded-3xl object-cover"
          />
          <div className="mt-4 sm:mt-8 mx-4">
            <div className="flex items-center mb-4">
              <Image
                src={logoImage}
                alt={`${project.title} project logo`}
                width={500}
                height={500}
                className="rounded-2xl bg-white dark:bg-navyblack 
                  w-13 h-13
                  sm:w-16 sm:h-16
                  lg:w-18 lg:h-18"
              />
              <h3 className="ml-4 font-serif card-title">{project.title}</h3>
            </div>
            <p className="sm:mx-2 card-text leading-relaxed sm:line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default ProjectsCard;
