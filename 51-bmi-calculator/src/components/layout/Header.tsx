import Logo from "@/public/logo.svg";

// NextJS
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="relative z-20">
      <div className="flex w-full flex-row items-center justify-center gap-0 lg:justify-start">
        <Link href={"#"}>
          <Image
            src={Logo}
            alt="Brand Logo"
            loading="eager"
            className="size-10 lg:size-16"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
