import VantaBackground from "./VantaBackground";
import { spaceGrotesk, outfit } from '../fonts'

export default function Main() {
  return (
    <VantaBackground>
      <div className="flex flex-col justify-center text-white h-screen px-5">
        <h1 className={`text-[40px] md:text-[100px] md:pl-50 font-bold ${outfit.className}`}>Hey, I'm Diego</h1>
        <p className={`mt-4 md:text-[40px] md:pl-50 text-lg ${spaceGrotesk.className}`}>A Front-End Developer</p>
      </div>
    </VantaBackground>
  );
}
