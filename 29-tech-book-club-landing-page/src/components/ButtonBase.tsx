interface ButtonBaseProps {
  text?: string;
  url?: string;
  ariaLabel?: string;
  className?: string;
}

function ButtonBase({
  text = "SUBSCRIBE NOW",
  url = "/",
  ariaLabel,
  className,
}: ButtonBaseProps) {
  return (
    <a
      href={url}
      target="_self"
      aria-label={ariaLabel}
      className={`bg-light-salmon-50 hover:from-light-salmon-100 hover:to-light-salmon-50 inline-block w-full rounded-lg border-2 border-neutral-900 px-6 py-4.5 transition-colors delay-100 ease-linear hover:bg-linear-to-r hover:from-0% hover:to-100% ${className}`}
    >
      <span className="text-preset-6 block text-center text-neutral-900">
        {text}
      </span>
    </a>
  );
}
export default ButtonBase;
