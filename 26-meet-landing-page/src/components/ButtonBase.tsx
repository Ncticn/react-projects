type ButtonBaseProps = {
  buttonColor: "purple" | "blue";
  text: string;
  extraText?: string;
  className?: string;
};

export default function ButtonBase({
  buttonColor,
  extraText,
  text,
  className,
}: ButtonBaseProps) {
  let customClass = "";
  if (buttonColor == "blue") customClass = "bg-cyan-600 hover:bg-[#71C0DA]";
  else if (buttonColor == "purple")
    customClass = "bg-purple-600 hover:bg-[#B18BDD]";

  return (
    <a
      href="/"
      aria-label="Click to downloading"
      className={`text-preset-5 text-white-base inline-flex flex-row items-start justify-start gap-2 rounded-[29px] px-10 py-4 transition-colors delay-100 ease-linear ${customClass} ${className}`}
    >
      {text && <span>{text}</span>}
      {extraText && (
        <span
          className={
            buttonColor == "blue" ? "text-cyan-300" : "text-purple-300"
          }
        >
          {extraText}
        </span>
      )}
    </a>
  );
}
