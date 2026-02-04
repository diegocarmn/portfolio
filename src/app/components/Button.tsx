import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode | null;
  link: string;
  target?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "primarySmall" | "secondarySmall";
  className?: string;
}

const Button = ({
  children,
  link,
  target,
  icon,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "relative overflow-hidden group rounded-full border active:scale-95 transition-transform duration-200 whitespace-nowrap text-center border-black/30 ";

  const variantStyles = {
    primary:
      "inline-block dark:bg-black bg-white dark:text-white text-black font-bold text-sm sm:text-base w-full py-2 px-4 dark:border-white/30",
    secondary:
      "inline-block bg-black dark:bg-white text-white dark:text-black font-bold w-full py-2 px-4 dark:border-black/30",
    primarySmall:
      "dark:bg-black bg-white dark:text-white text-black font-bold text-sm sm:text-base min-w-fit text-sm sm:text-base pl-3 pr-2 py-1 sm:pl-4 sm:pr-3 sm:py-2 dark:border-white/30",
    secondarySmall:
      "bg-black dark:bg-white text-white dark:text-black w-fit py-2 px-4 dark:border-white/30 dark:border-white/30",
  };

  const hoverBgStyles = {
    primary: "bg-black dark:bg-white",
    secondary: "bg-white dark:bg-black",
    primarySmall: "bg-black dark:bg-white",
    secondarySmall: "bg-white dark:bg-black",
  };

  const textColorStyles = {
    primary:
      "text-black dark:text-white group-hover:text-white group-hover:dark:text-black",
    secondary:
      "text-white dark:text-black group-hover:text-black group-hover:dark:text-white",
    primarySmall:
      "text-black dark:text-white group-hover:text-white group-hover:dark:text-black",
    secondarySmall:
      "text-white dark:text-black group-hover:text-black group-hover:dark:text-white",
  };

  return (
    <Link
      href={link}
      target={target}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span
        className={`absolute inset-0 ${hoverBgStyles[variant]} -translate-x-full group-hover:translate-x-0 transition-transform duration-300`}
      ></span>
      <span
        className={`relative z-10 ${textColorStyles[variant]} transition-colors duration-300 inline-flex items-center gap-1`}
      >
        {children}
        {icon && <span className="inline-flex h-4 w-4">{icon}</span>}
      </span>
    </Link>
  );
};

export default Button;
