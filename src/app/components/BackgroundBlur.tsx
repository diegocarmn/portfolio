"use client";

const BackgroundBlur = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-10 -right-10 w-150 h-150 bg-purple-700 rounded-full blur-3xl animate-blob opacity-70" />
      <div className="absolute -top-20 -right-40 w-150 h-150 bg-cyan-600 rounded-full blur-3xl animate-blob opacity-40" />
      <div className="absolute top-20 -right-20 w-150 h-150 bg-blue-300 rounded-full blur-3xl animate-blob opacity-40" />
    </div>
  );
};

export default BackgroundBlur;
