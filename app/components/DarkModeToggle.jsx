"use client";
import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className="px-4 py-2 text-black dark:text-white h-full"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <MdSunny /> : <IoMoon />}
    </button>
  );
}
