import React from "react";

interface NavbarButtonProps {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLDivElement | null>;
  active?: boolean;
}

const NavbarButton = ({ children, targetRef, active }: NavbarButtonProps) => {
  return (
    <button
      onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })}
      className={`px-4 transition-all duration-300 cursor-pointer font-normal ${
        active
          ? "drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] opacity-100"
          : "opacity-80 hover:opacity-100"
      }`}
    >
      {children}
    </button>
  );
};

export default NavbarButton;
