import { MdContentCopy, MdDone } from "react-icons/md";
import { useState } from "react";
import translations from "./content/translations";

const CopyEmailButton = ({ lang }: { lang: "en" | "pt" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("diegoncarmona@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className={`font-bold text-white text-sm px-4 py-2 rounded-4xl mt-2 cursor-pointer w-fit flex items-center shadow-md border border-black/10 ${copied ? "bg-green-600" : "bg-primary dark:bg-primarydark hover:bg-sky-600 dark:hover:bg-sky-700"}`}
      onClick={handleCopy}
      disabled={copied}
    >
      {copied ? (
        <>
          <MdDone className="inline mr-1" />{" "}
          {translations[lang].contact.button.copied}
        </>
      ) : (
        <>
          <MdContentCopy className="inline mr-1" />{" "}
          {translations[lang].contact.button.copy}
        </>
      )}
    </button>
  );
};

export default CopyEmailButton;
