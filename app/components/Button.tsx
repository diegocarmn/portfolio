import { ElementType } from "react";
import { outfit, montserrat, spaceGrotesk } from "../fonts";

type ButtonProps = {
  icon: ElementType;
  text: string;
  link: string;
};

export default function Button({ icon: Icon, text, link }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-4xl px-5  py-2 md:px-6 md:py-3 
      bg-white/10
      backdrop-blur-md border border-white/20
      hover:bg-black/90 hover:text-white 
      dark:hover:bg-white dark:hover:text-black 
      text-sm md:text-lg whitespace-nowrap mr-2 md:mr-4 
      active:scale-95 transition-all duration-150 
      dark:active:bg-white dark:active:text-black 
      active:bg-black/90 active:text-white 
      shadow-lg hover:shadow-lg 
      dark:hover:shadow-white/30 ${outfit.className}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-base md:text-lg" />
      {text}
    </a>
  );
}
