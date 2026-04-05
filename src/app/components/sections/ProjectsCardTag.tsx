interface ProjectsCardTagProps {
  tags: string[];
  singleLine?: boolean;
}

const ProjectsCardTag = ({
  tags,
  singleLine = false,
}: ProjectsCardTagProps) => {
  return (
    <div
      className={
        singleLine
          ? "flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden no-scrollbar"
          : "flex flex-wrap gap-1"
      }
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs sm:text-sm font-semibold text-black dark:text-white opacity-80 px-2 py-1 bg-gray-200 dark:bg-white/10 rounded-md select-none inline-block whitespace-nowrap shrink-0"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectsCardTag;
