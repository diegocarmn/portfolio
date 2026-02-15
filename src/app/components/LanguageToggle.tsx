import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LanguageToggle = ({
  lang,
  setLang,
}: {
  lang: "en" | "pt";
  setLang: React.Dispatch<React.SetStateAction<"en" | "pt">>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value: "en" | "pt") => {
    setLang(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1 px-3 py-2 text-lg md:text-sm font-bold rounded-full cursor-pointer opacity-70 dark:opacity-80 hover:opacity-100 transition-opacity duration-300 ${isOpen ? "bg-white dark:bg-white/10 opacity-100 dark:opacity-100 " : ""}`}
      >
        {lang === "en" ? "EN" : "PT"}
        {isOpen ? (
          <IoIosArrowUp className="w-4 h-4" />
        ) : (
          <IoIosArrowDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute -right-8 mt-4 grid gap-1 p-2 w-34 rounded-3xl bg-white dark:bg-navyblack shadow-lg border border-black/10 dark:border-white/10 z-50 font-semibold text-sm">
          <button
            type="button"
            disabled={lang === "en"}
            onClick={() => handleSelect("en")}
            className={`flex w-full text-left px-3 py-2 rounded-4xl cursor-pointer ${
              lang === "en"
                ? "bg-black/5 dark:bg-white/10"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            <Image
              src="/us.svg"
              alt="USA flag"
              width={16}
              height={12}
              className="mr-2 inline-block rounded-xs"
            />
            English
          </button>
          <button
            type="button"
            disabled={lang === "pt"}
            onClick={() => handleSelect("pt")}
            className={`flex w-full text-left px-3 py-2 rounded-4xl cursor-pointer ${
              lang === "pt"
                ? "bg-black/5 dark:bg-white/10"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            <Image
              src="/br.svg"
              alt="Brazil flag"
              width={16}
              height={12}
              className="mr-2 inline-block rounded-xs"
            />
            Português
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
