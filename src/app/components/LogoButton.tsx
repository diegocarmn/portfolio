import Link from "next/link";
import { motion } from "framer-motion";

const LogoButton = ({
  link,
  logo,
  target,
  title,
}: {
  link?: string;
  logo?: React.ReactNode;
  target?: string | undefined;
  title?: string;
}) => {
  return (
    <motion.div
      className="relative inline-flex"
      initial="hidden"
      whileHover="visible"
    >
      <Link
        href={link || "#"}
        target={target}
        rel="noopener noreferrer"
        className="flex items-center justify-center w-6 h-6 opacity-70 hover:opacity-100 active:scale-90 transition-all duration-200"
      >
        {logo}
      </Link>

      <motion.span
        variants={{
          hidden: { opacity: 0, y: -6, scale: 0.6, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-full text-sm font-semibold bg-white dark:bg-navyblack rounded py-1 px-2 shadow"
      >
        {title}
      </motion.span>
    </motion.div>
  );
};


export default LogoButton;
