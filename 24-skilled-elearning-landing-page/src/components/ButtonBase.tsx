type ButtonBaseProps = {
  buttonType: "black" | "orange" | "purple";
  content: string;
};

function ButtonBase({ buttonType, content }: ButtonBaseProps) {
  let buttonClass: string = "";

  if (buttonType == "black") {
    buttonClass = "bg-blue-900 hover:bg-blue-600";
  } else if (buttonType == "orange") {
    buttonClass = "gradient-preset-1 hover:opacity-50";
  } else if (buttonType == "purple") {
    buttonClass = "gradient-preset-2 hover:opacity-50";
  }
  return (
    <a
      href="#"
      className={`text-preset-7 inline-flex items-center justify-center gap-2 rounded-[28px] px-8 py-4 text-white transition-all delay-100 ease-linear md:px-6 md:py-3 lg:px-8 lg:py-4 ${
        buttonClass ? buttonClass : ""
      }`}
      aria-label={content}
    >
      {content}
    </a>
  );
}
export default ButtonBase;
