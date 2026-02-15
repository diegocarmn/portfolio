import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const ContactCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative group/contact w-full bg-white dark:bg-navyblack dark:border-white/10 text-left rounded-2xl p-5 shadow-md border border-black/10 hover:bg-black/3 dark:hover:bg-white/5"
    >
      <h3 className="card-subtitle font-serif">
        {title}
      </h3>
      <p className="card-text text-black dark:text-white text-balance ">
        {description}
      </p>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <IoIosArrowForward
          className="text-black dark:text-white group-hover/contact:translate-x-1 transition-transform duration-200"
          size={24}
        />
      </div>
    </Link>
  );
};

export default ContactCard;
