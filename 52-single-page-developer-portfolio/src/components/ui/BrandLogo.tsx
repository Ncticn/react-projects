// NextJS
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link
      href={"#"}
      aria-label="Go to homepage"
      className="text-base-white text-2xl leading-8 font-bold tracking-[-0.33px] md:text-[2rem] md:tracking-[-0.44px]"
    >
      adamkeyes
    </Link>
  );
}
