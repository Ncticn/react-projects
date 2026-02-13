interface ButtonLinkProps {
  type: "red" | "yellow";
  text: string;
  url: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
  const selectedTypeClass =
    props.type == "red" ? "after:bg-red-400" : "after:bg-yellow-500";

  return (
    <a
      href={props.url}
      className={`text-preset-8 text-grey-950 relative z-30 cursor-pointer px-2.5 uppercase after:absolute after:inset-x-0 after:-bottom-0.5 after:-z-10 after:h-2.5 after:w-full after:rounded-[28px] after:opacity-25 after:transition-opacity after:delay-75 after:ease-linear hover:after:opacity-100 ${selectedTypeClass}`}
      aria-label="Learn More"
    >
      {props.text}
    </a>
  );
}
