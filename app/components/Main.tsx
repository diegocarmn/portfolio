import VantaBackground from "./VantaBackground";

export default function Main() {
  return (
    <VantaBackground>
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Explore my projects and skills</p>
      </div>
    </VantaBackground>
  );
}
