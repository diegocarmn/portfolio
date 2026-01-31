import React from "react";

type NavbarButtonVariant = "desktop" | "mobile";

interface NavbarButtonProps {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLDivElement | null>;
  active?: boolean;
  variant?: NavbarButtonVariant;
  onClick?: () => void;
}

const NavbarButton = ({
  children,
  targetRef,
  active,
  variant = "desktop",
  onClick,
}: NavbarButtonProps) => {
  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
    onClick?.();
  };

  const baseStyles = "transition-all duration-300 cursor-pointer";

  const variantStyles = {
    desktop: "px-4 font-normal",
    mobile: "text-4xl font-medium",
  };

  const activeStyles = {
    desktop: "drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] opacity-100",
    mobile: "opacity-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] dark:drop-shadow-none",
  };

  const inactiveStyles = {
    desktop: "opacity-80 hover:opacity-100",
    mobile: "opacity-70 hover:opacity-100",
  };

  const className = `${baseStyles} ${variantStyles[variant]} ${
    active ? activeStyles[variant] : inactiveStyles[variant]
  }`;

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default NavbarButton;
