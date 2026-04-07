"use client";

// Components
import BrandLogo from "../ui/BrandLogo";

function Header() {
  return (
    <header>
      <div className="mx-auto max-w-full md:max-w-176 lg:max-w-277.5">
        <div className="flex flex-row items-center justify-center gap-0 md:justify-start">
          <BrandLogo />
        </div>
      </div>
    </header>
  );
}

export default Header;
