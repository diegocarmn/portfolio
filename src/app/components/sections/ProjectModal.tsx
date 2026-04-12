import { createPortal } from "react-dom";
import { useEffect } from "react";
import type { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { modal, modalContainer, modalItem } from "@/app/motion/animations";
import translations from "@/app/content/translations";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../ui/Button";
import { MediaSlider } from "../ui/MediaSlider";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
  project: Project;
  logoImage: string;
  onClose: () => void;
  lang: "en" | "pt";
}

export function ProjectModal({
  project,
  logoImage,
  onClose,
  lang,
}: ProjectModalProps) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.paddingRight = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      {...modal}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-100 bg-bglight/70 backdrop-blur-3xl dark:bg-bgdark/80"
    >
      <div className="fixed top-4 right-4 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] xl:shadow-none dark:text-white z-100">
        <Button
          onClick={onClose}
          variant="secondary"
          icon={<IoClose className="h-4 w-4" />}
          className="font-sans"
        >
          {translations[lang].ui.close}
        </Button>
      </div>

      <div className="w-full 2xl:max-w-600 xl:mx-auto h-screen overflow-y-auto px-4 sm:px-8 md:px-12 pt-15 pb-22 md:py-22">
        <motion.div
          variants={modalContainer}
          initial="hidden"
          animate="visible"
          className="grid xl:grid-cols-2 gap-4 md:gap-8 mx-auto"
        >
          <div className="flex flex-col gap-4 md:gap-8">
            {/* Logo + ttle */}
            <motion.div
              variants={modalItem}
              className="flex items-center gap-4"
            >
              <Image
                src={logoImage}
                alt={`${project.title} project logo`}
                width={500}
                height={500}
                className="rounded-2xl bg-white dark:bg-navyblack w-13 h-13 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
              />
              <h3 className="font-serif text-5xl tracking-tight font-bold dark:text-white">
                {project.title}
              </h3>
            </motion.div>

            {/* Tags */}
            <motion.div variants={modalItem} className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm font-sans font-semibold text-black w-fit dark:text-white opacity-80 px-2 py-1 bg-primary/30 dark:bg-darkgray rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <div className="dark:text-white font-sans flex flex-col gap-4 md:gap-8">
              {/* Subtitle */}
              <motion.h4 variants={modalItem} className="font-serif card-title">
                {project.subtitle}
              </motion.h4>

              {/* Overview */}
              <motion.p
                variants={modalItem}
                className="card-text text-balance opacity-100"
              >
                {project.overview}
              </motion.p>

              {/* Features title */}
              <motion.h4 variants={modalItem} className="font-serif card-title">
                {translations[lang].projects.features}
              </motion.h4>

              {/* Features list */}
              <motion.ul
                variants={modalItem}
                className="card-text opacity-100 flex flex-col gap-2 px-3 sm:px-3"
              >
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Buttons */}
              <motion.div variants={modalItem} className="flex gap-4">
                <Button
                  variant="secondary"
                  link={project.buttons.github.link}
                  target="_blank"
                  icon={<IoIosArrowForward className="h-4 w-4" />}
                >
                  {project.buttons.github.text}
                </Button>
                <Button
                  variant="primary"
                  link={project.buttons.website.link}
                  target="_blank"
                  icon={<IoIosArrowForward className="h-4 w-4" />}
                >
                  {project.buttons.website.text}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Media slider */}
          <motion.div variants={modalItem}>
            <MediaSlider
              mediaUrls={project.media.urls}
              mediaLabels={project.media.descriptions}
              lang={lang}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>,
    document.body,
  );
}
