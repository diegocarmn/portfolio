const BentoCard = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col bg-white rounded-4xl border border-black/10 dark:bg-navyblack dark:border-white/10 shadow-md text-center w-full h-fit p-3 md:p4">
      <h3 className="font-serif font-medium tracking-tight text-3xl sm:text-4xl">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default BentoCard;
