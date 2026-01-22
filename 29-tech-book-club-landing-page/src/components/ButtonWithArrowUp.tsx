import IconArrowUp from "./IconArrowUp";

interface ButtonWithArrowUpProps {
  url?: string;
  ariaLabel?: string;
  text?: string;
  className?: string;
}

function ButtonWithArrowUp({
  url = "/",
  ariaLabel,
  text = "ALTERNATE BUTTON",
  className,
}: ButtonWithArrowUpProps) {
  return (
    <a
      href={url}
      target="_self"
      aria-label={ariaLabel}
      className={`btn-secondary ${className ? className : ""}`}
    >
      <span className="text-preset-6">{text}</span>
      <IconArrowUp />
    </a>
  );
}

export default ButtonWithArrowUp;
