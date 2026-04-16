
// NextJS
import Link from "next/link";

// Component Styles
import styles from "@/components/ui/ButtonLink/ButtonLink.module.css";

interface ButtonLinkProps {
    type: "primary" | "secondary";
    text: string;
    url?: string;
}

export default function ButtonLink({ type, text, url = "#" }: ButtonLinkProps) {
    let buttonClass;

    switch (type) {
        case "primary":
            buttonClass = "bg-white border-white text-blue-500 hover:text-white hover:border-white hover:bg-transparent";
            break;
        case "secondary":
            buttonClass = "hover:bg-none hover:bg-transparent border-transparent text-white bg-linear-to-br from-0% from-[#A2A7F0] to-100% to-[#696EDD] hover:text-blue-500 hover:border-blue-500";
            break;
    }

    return (
        <Link
            href={url}
            aria-label={text}
            className={`${styles.btn} ${buttonClass}`}
        >
            <span className="text-preset-6">
                {text}
            </span>
        </Link>
    );
}