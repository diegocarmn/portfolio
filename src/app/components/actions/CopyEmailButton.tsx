import { MdContentCopy, MdDone } from "react-icons/md";
import { useState } from "react";
import translations from "@/app/content/translations";
import { motion, AnimatePresence } from "framer-motion";

const CopyEmailButton = ({ lang }: { lang: "en" | "pt" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("diegoncarmona@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className={`
        font-bold text-white text-sm px-4 py-2 rounded-4xl mt-2
        cursor-pointer w-fit flex items-center
        shadow-md border border-black/10
        disabled:cursor-not-allowed
        transition-colors duration-50
        ${
          copied
            ? "bg-success"
            : "bg-primary dark:bg-primarydark hover:bg-primary/90 dark:hover:bg-primarydark/90 transition-colors duration-50 ease-in-out"
        }
      `}
      onClick={handleCopy}
      type="button"
      aria-label={
        copied
          ? translations[lang].contact.button.copied
          : translations[lang].contact.button.copy
      }
      disabled={copied}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="copied"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <MdDone className="w-4 h-4" aria-hidden="true" />
            </motion.div>
            <span>{translations[lang].contact.button.copied}</span>
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <MdContentCopy className="w-4 h-4" aria-hidden="true" />
            <span>{translations[lang].contact.button.copy}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default CopyEmailButton;
