
import Navbar from "./components/Navbar";
import BackgroundBlur from "./components/BackgroundBlur";
import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-black bg-white">
        <VantaBackground>
          <section className="flex flex-col w-screen h-screen justify-center sm:max-w-6xl sm:mx-auto">
            <h1 className="text-7xl">Diego Carmona</h1>
            <h2 className="text-4xl">Front-end developer</h2>
          </section>
        </VantaBackground>
      </main>
    </>
  );
}
