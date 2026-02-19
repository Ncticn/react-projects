import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonTextProps {
  text: string;
  url: string;
  ariaLabel: string;
  class?: string;
}

export default function ButtonText(props: ButtonTextProps) {
  return (
    <a
      href={props.url}
      aria-label={props.ariaLabel}
      className={`group inline-flex flex-row items-center justify-center gap-2 border-b border-blue-300 pb-1 transition-all delay-75 ease-linear hover:border-white ${props.class ? props.class : ""}`}
    >
      <span className="text-preset-7-regular text-blue-300 transition-all delay-75 ease-linear group-hover:text-white">
        {props.text}
      </span>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="text-blue-300 drop-shadow-[0_0_2px_rgba(98,224,217,81.11%)] transition-all delay-75 ease-linear group-hover:text-white"
      />
    </a>
  );
}
