import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <VantaBackground>
      <main className="flex flex-col h-screen items-center justify-center dark">
        <h1 className="text-7xl text-black">Diego Carmona</h1>
        <h2 className="text-black text-4xl">Front-end developer</h2>
      </main>
    </VantaBackground>
  );
}
