interface ButtonAppProps {
  buttonText: string;
  buttonClass?: string;
  buttonLink?: string;
}

export default function ButtonApp({
  buttonText = "SEE ALL",
  buttonClass,
  buttonLink = "#",
}: ButtonAppProps) {
  return (
    <a
      href={buttonLink}
      className={`border border-black bg-white px-9.25 py-2 text-black transition-all delay-75 ease-linear active:bg-black active:text-white ${buttonClass}`}
    >
      <span className="text-preset-7 uppercase">{buttonText}</span>
    </a>
  );
}
