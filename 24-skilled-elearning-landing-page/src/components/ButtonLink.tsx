type ButtonLinkProps = {
  content: string;
  buttonClass?: string;
};

function ButtonLink({ content, buttonClass }: ButtonLinkProps) {
  return (
    <a
      href="#"
      className={`inline-block text-preset-7 transition-all delay-100 ease-linear text-pink-600 hover:text-pink-300 ${
        buttonClass ? buttonClass : ""
      }`}
      aria-label={content}
    >
      {content}
    </a>
  );
}
export default ButtonLink;
