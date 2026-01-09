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
      className={`inline-flex items-center justify-center gap-2 text-preset-7 text-white rounded-[28px] md:px-6 md:py-3 px-8 py-4 lg:px-8 lg:py-4 transition-all delay-100 ease-linear ${
        buttonClass ? buttonClass : ""
      }`}
      aria-label={content}
    >
      {content}
    </a>
  );
}
export default ButtonBase;
