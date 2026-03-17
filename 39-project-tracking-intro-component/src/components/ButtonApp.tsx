interface ButtonAppProps {
  buttonText: string;
  buttonLink?: string;
  buttonClass?: string;
}

export default function ButtonApp({
  buttonText,
  buttonLink = "#",
  buttonClass = "",
}: ButtonAppProps) {
  return (
    <a
      href={buttonLink}
      className={`hover:bg-red-350 inline-flex items-center justify-center gap-2 rounded-[5px] bg-red-400 px-6 py-3.5 transition-colors delay-75 ease-linear md:px-9 md:py-3.75 ${buttonClass}`}
    >
      <span className="text-preset-4 tracking-1px font-bold text-white uppercase">
        {buttonText}
      </span>
    </a>
  );
}
