// NextJS
import Image from "next/image";
import Link from "next/link";

// Images
import LogoLightTheme from "../../../public/logo-light-theme.svg";

export default function LogoLight() {
    return (
        <Link href={"#"} aria-label="Go to homepage">
            <Image src={LogoLightTheme} alt="Brand Logo" />
        </Link>
    );
}