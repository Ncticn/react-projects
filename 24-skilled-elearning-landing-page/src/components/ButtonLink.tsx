type ButtonLinkProps = {
  content: string;
  clasName?: string;
};

function ButtonLink({ content, clasName }: ButtonLinkProps) {
  return (
    <a
      href="#"
      className={`inline-block text-preset-7 transition-all delay-100 ease-linear text-pink-600 hover:text-pink-300 ${
        clasName ? clasName : ""
      }`}
      aria-label={content}
    >
      {content}
    </a>
  );
}
export default ButtonLink;
