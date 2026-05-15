// NextJS
import Link from "next/link";

export default function BrandLogo() {
    return (
        <Link href={"#"} aria-label="Go to homepage" className="font-bold text-2xl md:text-[2rem] leading-8  tracking-[-0.33px] md:tracking-[-0.44px] text-base-white">adamkeyes</Link>
    );
}