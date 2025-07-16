import VantaBackground from "./VantaBackground";
import { spaceGrotesk, outfit, montserrat } from "../fonts";

export default function Main() {
  return (
    <VantaBackground>
      <div className="flex flex-col justify-center text-white h-screen px-5 md:pl-[250px]">
        <h1
          className={`text-[50px] md:text-[100px] font-bold ${outfit.className}`}
        >
          Hey, I&apos;m Diego
        </h1>
        <p
          className={`mt-0 md:text-[45px] text-[20px] font-extralight md:font-extralight ${montserrat.className}`}
        >
          A Front-End Developer
        </p>
        <p
          className={`mt-2 md:text-xl text-sm text-white/70 ${outfit.className}`}
        >
          Creating fast, responsive, and intuitive web experiences.
        </p>
      </div>
    </VantaBackground>
  );
}
