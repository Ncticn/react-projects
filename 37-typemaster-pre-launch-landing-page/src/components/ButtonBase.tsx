interface ButtonBaseProps {
  buttonType: "primary" | "secondary";
  buttonText: string;
}

export default function ButtonBase({
  buttonText,
  buttonType,
}: ButtonBaseProps) {
  let currentClass: string;

  if (buttonType == "primary") {
    currentClass = "bg-orange-500 hover:bg-orange-300  text-neutral-0";
  } else {
    currentClass =
      "bg-neutral-200 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-0";
  }

  return (
    <a
      href="#"
      aria-label="#"
      className={`inline-block h-full w-fit transition-all delay-75 ease-linear focus:rounded-lg focus:p-0.5 focus:outline-4 ${buttonType == "primary" ? "outline-orange-500" : "outline-neutral-900"}`}
    >
      <div
        className={`inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-4 transition-all delay-75 ease-linear ${currentClass}`}
      >
        <span className="text-preset-6 block uppercase">{buttonText}</span>
      </div>
    </a>
  );
}
