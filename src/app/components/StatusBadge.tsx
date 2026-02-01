const StatusBadge = () => {
  return (
    <div className="relative flex items-center gap-2 border rounded-4xl px-3 py-1 mb-4 bg-white/30 dark:bg-black/5 border-black/30 dark:border-white/30 backdrop-blur-md w-max">
      <span className="absolute inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-600 dark:bg-green-500 opacity-75 animate-ping"></span>
      <span className="relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-600 dark:bg-green-500"></span>
      <span className="text-xs sm:text-base text-black/90 dark:text-white/70">Available for projects</span>
    </div>
  );
};

export default StatusBadge;