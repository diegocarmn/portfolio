import Link from "next/link";

const LogoButton = ({
  link,
  logo,
  target,
  title,
}: {
  link?: string;
  logo?: React.ReactNode;
  target?: string | undefined;
  title?: string;
}) => {
  return (
    <Link
      href={link || "#"}
      target={target || undefined}
      rel="noopener noreferrer"
      title={title || ""}
      className="flex items-center justify-center w-6 h-6 opacity-70 hover:opacity-100 active:scale-90 transition-all duration-200 "
    >
      {logo}
    </Link>
  );
};


export default LogoButton;
