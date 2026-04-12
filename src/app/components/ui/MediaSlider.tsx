import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mediaSlide, mediaLabel } from "@/app/motion/animations";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import translations from "@/app/content/translations";

type MediaSliderProps = {
  mediaUrls: string[];
  mediaLabels: string[];
  lang: "en" | "pt";
};

export function MediaSlider({
  mediaUrls,
  mediaLabels,
  lang,
}: MediaSliderProps) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const t = translations[lang];

  function showNextMedia() {
    setDirection(1);
    setMediaIndex((index) => (index === mediaUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevMedia() {
    setDirection(-1);
    setMediaIndex((index) => (index === 0 ? mediaUrls.length - 1 : index - 1));
  }

  return (
    <div className="relative w-full h-fit aspect-video">
      <AnimatePresence mode="wait">
        <motion.h4
          key={mediaLabels[mediaIndex]}
          {...mediaLabel}
          className="font-serif card-title dark:text-white mb-4 md:mb-8"
          aria-live="polite"
        >
          {mediaLabels[mediaIndex]}
        </motion.h4>
      </AnimatePresence>

      <div
        role="region"
        aria-label={mediaLabels[mediaIndex]}
        className="relative w-full rounded-3xl overflow-clip aspect-video"
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={mediaUrls[mediaIndex]}
            {...mediaSlide(direction)}
            autoPlay
            muted
            onEnded={showNextMedia}
            src={mediaUrls[mediaIndex]}
            aria-label={mediaLabels[mediaIndex]}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="flex absolute left-1/2 -translate-x-1/2 -bottom-16 gap-4 dark:text-white items-center">
        <button
          className="icon-button"
          onClick={showPrevMedia}
          aria-label={t.ui.previous}
        >
          <IoIosArrowBack className="h-4 w-4" aria-hidden="true" />
        </button>

        <div role="tablist" className="flex gap-2 items-center">
          {mediaUrls.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === mediaIndex}
              aria-label={mediaLabels[i]}
              onClick={() => {
                setDirection(i > mediaIndex ? 1 : -1);
                setMediaIndex(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === mediaIndex
                  ? "w-5 h-3 bg-primary/50 dark:bg-white border border-black/30 dark:border-none"
                  : "w-3 h-3 bg-white dark:bg-white/30 border border-black/30 dark:border-none hover:bg-primary/50 dark:hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          className="icon-button"
          onClick={showNextMedia}
          aria-label={t.ui.next}
        >
          <IoIosArrowForward className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
