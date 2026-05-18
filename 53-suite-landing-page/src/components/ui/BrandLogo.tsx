import Link from "next/link";

export default function BrandLogo() {
    return (
        <Link href={"#"} aria-label="Go to landing page">
            <img src={"/logo.svg"} alt="Brand Logo" />
        </Link>
    );
}