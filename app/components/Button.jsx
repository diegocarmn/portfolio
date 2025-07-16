
export default function Button(props) {
    const Icon = props.icon; // isso cria um componente "local"
  return (
    <a
  className="inline-flex items-center gap-2 rounded-4xl px-5 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white transition duration-300 hover:text-black hover:shadow-lg text-white text-sm md:text-lg whitespace-nowrap mr-2 md:mr-4 active:scale-95 transition-all duration-150 active:bg-white active:text-black"
  href={props.link}
  target="_blank"
>
  <Icon className="text-base md:text-lg" />
  {props.text}
</a>
  );
}