import Image from "next/image";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import LocationCard from "./LocationCard";
import translations from "./content/translations";
import { motion } from "framer-motion";
import { animatedCard } from "./animations";

const techStack = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "JavaScript",
  "Git",
];

const animatedList = {
  hidden: { 
    opacity: 0},

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
}

const animatedItem = {
  hidden: { 
    opacity: 0, 
    y: 20 },
  visible: {
    opacity: 0.8,
    y: 0,
  },
}

const BentoGrid = ({ lang }: { lang: "en" | "pt" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:max-w-200 xl:max-w-300">
      {/* PROFILE */}
      <motion.div
        variants={animatedCard}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bento-card group/card p-10"
      >
        <div className="flex flex-col text-left gap-8 md:justify-between h-full">
          <span className="flex flex-row items-center mx-auto gap-4">
            <div className="relative inline-flex items-center justify-center mx-auto">
              {/* static primary border */}
              <div className="w-20 h-20 rounded-full border-3 border-primary relative z-10 overflow-hidden transition-colors duration-300 group-hover/card:border-transparent">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              {/* rainbow ring only on hover */}
              <div className="hidden md:block profile-image-ring"></div>
            </div>
            <h3 className="card-title font-serif">
              {translations[lang].about.profile.intro}
              <br />
              {translations[lang].about.profile.intro2}{" "}
              <span
                className="inline-block animate-[wave_3s_infinite]
                origin-[70%_70%]"
              >
                👋
              </span>
            </h3>
          </span>

          <p className="card-text text-balance text-center group-hover/card:opacity-100 transition-opacity duration-300">
            {translations[lang].about.profile.description}
          </p>
          <Button
            link={translations[lang].about.profile.button.link}
            target="_blank"
            variant="primarySmall"
            icon={<IoIosArrowForward className="h-4 w-4" />}
            className="mx-auto"
          >
            {translations[lang].about.profile.button.text}
          </Button>
        </div>
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        variants={animatedCard}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group bento-card p-10 md:justify-between items-center"
      >
        <h3 className="card-title font-serif pb-4 flex items-center gap-3">
          <BsStack className="h-6 w-6 sm:h-8 sm:w-8 inline" />
          {translations[lang].about.techstack.title}
        </h3>
        <motion.ul
          variants={animatedList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif tracking-tighter font-bold text-2xl md:text-4xl leading-6 md:leading-8 text-center opacity-90 sm:opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        >
          {techStack.map((tech, index) => (
            <motion.li key={index} variants={animatedItem}>
              {tech}
              <br />
            </motion.li>
          ))}
        </motion.ul>
        <p className="card-text pt-4 px-6 text-balance group-hover:opacity-100 transition-opacity duration-300">
          {translations[lang].about.techstack.description}
        </p>
      </motion.div>

      {/* RESEARCH */}
      <motion.div
        variants={animatedCard}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 xl:col-span-1 md:col-span-2 gap-4"
      >
        <div className="bento-card group/research p-10 gap-8 items-center">
          <h3 className="card-title font-serif flex items-center gap-2">
            <IoDocumentText className="h-6 w-6 sm:h-8 sm:w-8 inline" />
            {translations[lang].about.research.title}
          </h3>
          <p className="card-text text-balance group-hover/research:opacity-100 transition-opacity duration-300">
            {translations[lang].about.research.description}
          </p>
          <Button
            link="https://repositorio.ufc.br/bitstream/riufc/43953/1/2012_eve_laemercado.pdf"
            target="_blank"
            variant="secondarySmall"
            icon={<IoIosArrowForward className="h-4 w-4" />}
            className="mx-auto"
          >
            {translations[lang].about.research.button}
          </Button>
        </div>
        {/* LOCATION */}
        <LocationCard lang={lang} />
      </motion.div>
    </div>
  );
};
export default BentoGrid;
