// NextJS
import Image from "next/image";
import Link from "next/link";

// Logo
import Logo from "@/assets/logo.svg";

function BrandLogo() {
  return (
    <Link href={"#"} aria-label="Go to Homepage">
      <Image src={Logo} alt="Brand Logo" />
    </Link>
  );
}

export default BrandLogo;
