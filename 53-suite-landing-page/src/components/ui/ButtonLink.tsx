// NextJS
import Link from "next/link";

// Props
interface ButtonLinkProps {
    text: string,
    href?: string,
    ariaLabel: string
}

export default function ButtonLink({ text, href = "#", ariaLabel }: ButtonLinkProps) {
    return (
        <Link href={href} aria-label={ariaLabel} className="transition delay-150 ease-linear text-preset-6 text-neutral-0 hover:bg-linear-to-br hover:from-0% hover:from-[#A060FF] hover:via-50% hover:via-purple-500 hover:to-100% hover:to-[#FFA84E]  bg-neutral-900 px-8 pt-5 pb-4 rounded-md focus:outline-4 focus:outline-offset-4 focus:outline-neutral-900">
            {text}
        </Link>
    );
}