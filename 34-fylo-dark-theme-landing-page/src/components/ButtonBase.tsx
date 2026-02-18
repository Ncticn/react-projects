interface ButtonBaseProps {
  text: string;
  class?: string;
  url: string;
  ariaLabel: string;
}

export default function ButtonBase(props: ButtonBaseProps) {
  return (
    <a
      href={props.url}
      aria-label={props.ariaLabel}
      target="_blank"
      className={`hover:bg-blue-250 inline-flex items-center justify-center rounded-[28px] py-4.5 drop-shadow-[0_3px_6px_rgba(0,0,0,15.93%)] transition-all delay-75 ease-linear not-hover:bg-linear-to-br not-hover:from-[#63E1D9] not-hover:from-0% not-hover:to-[#34A0CD] not-hover:to-100% ${props.class ? props.class : ""}`}
    >
      <span className="text-preset-3-bold text-white">{props.text}</span>
    </a>
  );
}
