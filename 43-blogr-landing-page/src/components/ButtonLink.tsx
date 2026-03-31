import Link from "next/link";

interface ButtonLinkProps {
  url?: string;
  text?: string;
  type: "primary" | "secondary";
}

function ButtonLink({ text = "Button", url = "#", type }: ButtonLinkProps) {
  let selectedClass = "";

  if (type === "primary") {
    selectedClass =
      "bg-white border-2 border-white text-red-500 hover:bg-transparent hover:text-white";
  } else if (type === "secondary") {
    selectedClass =
      "bg-red-400 text-white border-2 border-red-400 hover:border-white hover:bg-white hover:text-red-400";
  }

  return (
    <Link
      href={url}
      className={`inline-flex items-center justify-center gap-0 rounded-[28px] px-4 py-3 *:transition *:delay-75 *:ease-linear ${selectedClass}`}
    >
      <span className="text-preset-6 leading-115% font-bold">{text}</span>
    </Link>
  );
}

export default ButtonLink;
