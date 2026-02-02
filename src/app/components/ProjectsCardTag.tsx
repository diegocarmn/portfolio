

const ProjectsCardTag = ({ text }: { text: string }) => {
    return (
        <span className="text-xs sm:text-sm font-semibold text-black dark:text-white opacity-80 p-1 mr-1 mb-1 bg-gray-200 dark:bg-white/10 rounded-md inline-block">{text}</span>
    )
}

export default ProjectsCardTag;