"use client";

// NextJS
import Link from "next/link";

// Props
interface ButtonLinkProps {
    ariaLabel: string;
    url?: string;
    text: string;
}
export default function ButtonLink({ url = "#", text, ariaLabel }: ButtonLinkProps) {
    return (
        <Link
            href={url}
            aria-label={ariaLabel}
            className="text-preset-4 text-slate-700 underline underline-offset-4 transition delay-150 ease-linear hover:text-slate-900"
        >
            {text}
        </Link>
    );
}