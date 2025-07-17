
export default function Button(props) {
    const Icon = props.icon; 
  return (
    <a
  className="inline-flex items-center shadow-md gap-2 rounded-4xl px-5 py-2 md:px-6 md:py-3 bg-white/20 dark:bg-white/10 hover:bg-black/90 hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg text-sm md:text-lg whitespace-nowrap mr-2 md:mr-4 active:scale-95 transition-all duration-150 dark:active:bg-white dark:active:text-black active:bg-black/90 active:text-white"
  href={props.link}
  target="_blank"
>
  <Icon className="text-base md:text-lg" />
  {props.text}
</a>
  );
}