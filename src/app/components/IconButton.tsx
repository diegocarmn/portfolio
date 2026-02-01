import Link from "next/link";

const IconButton = ({
  link,
  target,
  icon,
}: {
  link: string;
  target?: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={link}
      target={target}
      className="
        relative group
        w-11 h-11 sm:w-12 sm:h-12
        rounded-full
        border border-black/30 dark:border-white/30
        bg-white dark:bg-black
        grid place-items-center
        overflow-hidden
        active:scale-95
        transition-transform duration-200
      "
    >
      <span
        className="
        absolute inset-0
        bg-black dark:bg-white
        -translate-x-full
        group-hover:translate-x-0
        transition-transform duration-300
      "
      />
      <span
        className="
        relative z-10
        text-black dark:text-white
        group-hover:text-white group-hover:dark:text-black
        transition-colors duration-300
      "
      >
        {icon}
      </span>
    </Link>
  );
};

export default IconButton;
