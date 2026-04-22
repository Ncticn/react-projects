// NextJS
import Image from "next/image";
import Link from "next/link";

// Images
import LogoDarkTheme from "../../../public/logo-dark-theme.svg";

export default function LogoDark() {
    return (
        <Link href={"#"} aria-label="Go to homepage">
            <Image src={LogoDarkTheme} alt="Brand Logo" className="max-w-48 md:max-w-full" loading="eager" />
        </Link>
    );
}