import React from "react";

type NavbarButtonVariant = "desktop" | "mobile";

interface NavbarButtonProps {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLElement | null>;
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
    const element = targetRef.current;
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: y, behavior: "smooth" });
    onClick?.();
  };

  const baseStyles = "transition-all duration-300 cursor-pointer";

  const variantStyles = {
    desktop: "px-4",
    mobile: "text-4xl w-full",
  };

  const inactiveStyles = {
    desktop: "opacity-80 hover:opacity-100 font-medium",
    mobile: "opacity-80 active:opacity-100",
  };

  const activeDesktopStyles =
    "drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] opacity-100 font-bold";

  const className = `${baseStyles} ${variantStyles[variant]} ${
    variant === "desktop" && active
      ? activeDesktopStyles
      : inactiveStyles[variant]
  }`;

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default NavbarButton;
