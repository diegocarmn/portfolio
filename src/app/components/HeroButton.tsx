import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const HeroButton = ({children, link, target}: {children: React.ReactNode, link: string, target?: string}) => {
  return (
    <Link
      href={link}
      target={target}
      className="relative overflow-hidden group dark:bg-black w-fit bg-white dark:text-white text-black font-bold text-sm sm:text-base pl-3 pr-2 py-1 sm:pl-4 sm:pr-3 sm:py-2 rounded-full border border-black/30 dark:border-white/30 active:scale-95 transition-transform duration-200"
    >
      <span className="absolute inset-0 bg-black dark:bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
      <span className="relative z-10 text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-colors duration-300">
        {children}
        <IoIosArrowForward className="inline-block h-4 w-4" />
      </span>
    </Link>
  );
};

export default HeroButton;