import IconArrowDown from "./IconArrowDown";

interface ButtonWithArrowDownProps {
  url?: string;
  ariaLabel?: string;
  text?: string;
  className?: string;
}

function ButtonWithArrowDown({
  url = "/",
  ariaLabel,
  text = "BUTTON",
  className,
}: ButtonWithArrowDownProps) {
  return (
    <a
      href={url}
      target="_self"
      aria-label={ariaLabel}
      className={`btn-primary ${className ? className : ""}`}
    >
      <span className="text-preset-6">{text}</span>
      <IconArrowDown />
    </a>
  );
}

export default ButtonWithArrowDown;
