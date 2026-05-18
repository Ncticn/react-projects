// NextJS
import Link from "next/link";

// Components
import BrandLogo from "../ui/BrandLogo";
import IconFacebook from "../ui/IconFacebook";
import IconTwitter from "../ui/IconTwitter";
import IconInstagram from "../ui/IconInstagram";

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
                <BrandLogo />
                <p className="text-preset-8 text-neutral-500">Copyright - Suite</p>
                <div className="social-media-links flex flex-row items-stretch justify-center gap-8 text-neutral-900">
                    <Link href={"#"} aria-label="Go to Facebook Profile Page">
                        <IconFacebook />
                    </Link>
                    <Link href={"#"} aria-label="Go to Facebook Profile Page">
                        <IconTwitter />
                    </Link>
                    <Link href={"#"} aria-label="Go to Facebook Profile Page">
                        <IconInstagram />
                    </Link>
                </div>
            </div>
        </footer>
    );
}