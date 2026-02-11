import Image from "next/image";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bento-card p-10 md:max-w-100">
        <div className="flex flex-col text-left gap-8 md:gap-0 md:justify-between h-full">
          <span className="flex flex-row items-center mx-auto gap-4">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto w-20 h-20 border-4 border-primary"
            ></Image>
            <h3 className="card-title font-serif">
              Hi, there!
              <br />
              I'm Diego 👋
            </h3>
          </span>

          <span className="card-text text-justify">
            I’m a full-stack developer driven by curiosity and learning through
            building real projects. I like working across the entire stack, from
            clean and intuitive user interfaces to backend logic and data. With a background in technical
            support, I bring a hands-on mindset, strong ownership, and attention
            to detail to everything I build.
          </span>
          <span className="flex">
            <Button
              link="/resume.pdf"
              target="_blank"
              variant="primarySmall"
              icon={<IoIosArrowForward className="h-4 w-4" />}
              className="mx-auto"
            >
              View Resume
            </Button>
          </span>
        </div>
      </div>
      <div className="group bento-card p-10 md:max-w-100 md:justify-between md:h-150">
        <h3 className="card-title font-serif pb-4">Tech Stack</h3>

        <h6 className="font-serif tracking-tighter font-bold text-2xl md:text-3xl leading-6 md:leading-8 text-center opacity-90 sm:opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          Typescript <br /> Next.js <br /> React <br /> Node.js <br /> Tailwind
          CSS <br /> PostgreSQL <br /> JavaScript <br /> Git
        </h6>
        <p className="card-text pt-4 px-6 text-balance group-hover:opacity-100 transition-opacity duration-300">
          Current technologies I've been working with.
        </p>
      </div>
    </div>
  );
};
export default BentoGrid;
