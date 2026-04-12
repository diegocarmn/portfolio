import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode | null;
  link?: string;
  target?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconLeft?: boolean;
  variant?: "primary" | "secondary" | "primarySmall" | "secondarySmall";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  link,
  target,
  ariaLabel,
  icon,
  iconLeft,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "relative overflow-hidden group/button rounded-full border active:scale-95 transition-all duration-300 whitespace-nowrap text-center border-black/30 hover:border-black cursor-pointer shadow-sm";

  const variantStyles = {
    primary:
      "inline-block dark:bg-primarydark bg-primary dark:text-white text-black font-bold text-sm sm:text-base w-fit py-2 px-4 dark:border-white/30",
    secondary:
      "inline-block dark:bg-navyblack bg-white dark:text-white text-black font-bold text-sm sm:text-base w-fit py-2 px-4 dark:border-white/30",
    primarySmall:
      "dark:bg-primarydark bg-primary font-bold text-sm sm:text-base min-w-fit text-sm sm:text-base pl-3 pr-2 py-1 sm:pl-4 sm:pr-3 sm:py-2 dark:border-white/30",
    secondarySmall:
      "dark:bg-navyblack bg-white font-bold text-sm sm:text-base min-w-fit text-sm sm:text-base pl-3 pr-2 py-1 sm:pl-4 sm:pr-3 sm:py-2 dark:border-white/30",
  };

  const hoverBgStyles = {
    primary: "bg-black dark:bg-white",
    secondary: "bg-black dark:bg-white",
    primarySmall: "bg-black dark:bg-white",
    secondarySmall: "bg-black dark:bg-white",
  };

  const textColorStyles = {
    primary:
      "text-white dark:text-white group-hover/button:text-white group-hover/button:dark:text-black",
    secondary:
      "text-black dark:text-white group-hover/button:text-white group-hover/button:dark:text-black",
    primarySmall:
      "text-white dark:text-white group-hover/button:text-white group-hover/button:dark:text-black",
    secondarySmall:
      "text-black dark:text-white group-hover/button:text-white group-hover/button:dark:text-black",
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
        type="button"
      >
        <span
          className={`absolute inset-0 ${hoverBgStyles[variant]} -translate-x-full group-hover/button:translate-x-0 transition-transform duration-250`}
        ></span>
        <span
          className={`relative z-10 ${textColorStyles[variant]} transition-colors duration-300 flex items-center gap-1`}
        >
          {iconLeft ? (
            <>
              {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
              {children}
            </>
          ) : (
            <>
              {children}
              {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
            </>
          )}
        </span>
      </button>
    );
  }

  // Use regular <a> tag for PDFs and external links to avoid RSC parsing issues
  const isPDF = link?.endsWith(".pdf");
  const isExternal = link?.startsWith("http");

  if (isPDF || isExternal) {
    return (
      <a
        href={link || "#"}
        target={target}
        rel={target}
        aria-label={ariaLabel}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span
          className={`absolute inset-0 ${hoverBgStyles[variant]} -translate-x-full group-hover/button:translate-x-0 transition-transform duration-250`}
        ></span>
        <span
          className={`relative z-10 ${textColorStyles[variant]} transition-colors duration-300 flex items-center gap-1`}
        >
          {iconLeft ? (
            <>
              {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
              {children}
            </>
          ) : (
            <>
              {children}
              {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
            </>
          )}
        </span>
      </a>
    );
  }

  return (
    <Link
      href={link || "#"}
      target={target}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <span
        className={`absolute inset-0 ${hoverBgStyles[variant]} -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300`}
      ></span>
      <span
        className={`relative z-10 ${textColorStyles[variant]} transition-colors duration-300 flex items-center gap-1`}
      >
        {iconLeft ? (
          <>
            {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
            {children}
          </>
        ) : (
          <>
            {children}
            {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
          </>
        )}
      </span>
    </Link>
  );
};

export default Button;
