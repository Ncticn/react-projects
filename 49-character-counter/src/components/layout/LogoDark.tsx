// NextJS
import Image from "next/image";
import Link from "next/link";

// Images
import LogoDarkTheme from "../../../public/logo-dark-theme.svg";

export default function LogoDark() {
    return (
        <Link href={"#"} aria-label="Go to homepage">
            <Image src={LogoDarkTheme} alt="Brand Logo" />
        </Link>
    );
}