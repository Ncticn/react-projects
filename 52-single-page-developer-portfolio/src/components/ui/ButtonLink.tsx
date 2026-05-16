// NextJS
import Link from "next/link";

// Props
interface ButtonLinkProps {
  url: string;
  text: string;
}

export default function ButtonLink({ text, url }: ButtonLinkProps) {
  return (
    <Link
      href={url}
      transitionTypes={["slide-linear"]}
      className="text-base-white border-base-green hover:text-base-green border-b-2 pb-2.5 text-base leading-6.5 font-bold tracking-[2.29px] uppercase transition delay-150 ease-linear"
    >
      {text}
    </Link>
  );
}
