type ButtonLinkProps = {
  content: string;
  buttonClass?: string;
};

function ButtonLink({ content, buttonClass }: ButtonLinkProps) {
  return (
    <a
      href="#"
      className={`text-preset-7 inline-block text-pink-600 transition-all delay-100 ease-linear hover:text-pink-300 ${
        buttonClass ? buttonClass : ""
      }`}
      aria-label={content}
    >
      {content}
    </a>
  );
}
export default ButtonLink;
