import { MdContentCopy, MdDone } from "react-icons/md";
import { useState } from "react";
import translations from "./content/translations";
import { motion, AnimatePresence } from "framer-motion";

const CopyEmailButton = ({ lang }: { lang: "en" | "pt" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("diegoncarmona@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.button
      className="font-bold text-white text-sm px-4 py-2 rounded-4xl mt-2 cursor-pointer w-fit flex items-center shadow-md border border-black/10 disabled:cursor-not-allowed"
      onClick={handleCopy}
      disabled={copied}
      animate={{
        backgroundColor: copied ? "rgb(22, 163, 74)" : "rgb(59, 130, 246)",
      }}
      transition={{
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={!copied ? { backgroundColor: "rgb(53, 111, 204)" } : {}}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="copied"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.div
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <MdDone className="w-4 h-4" />
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
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <MdContentCopy className="w-4 h-4" />
            <span>{translations[lang].contact.button.copy}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
