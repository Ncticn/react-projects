// NextJS
import Link from "next/link";

// Props
interface ButtonLinkProps {
    url: string,
    text: string,
}

export default function ButtonLink({ text, url }: ButtonLinkProps) {
    return (
        <Link
            href={url}
            transitionTypes={['slide-linear']}
            className="text-base font-bold leading-6.5 tracking-[2.29px] text-base-white uppercase border-b-2 border-base-green pb-2.5 transition delay-150 ease-linear hover:text-base-green"
        >
            {text}
        </Link>
    );
}