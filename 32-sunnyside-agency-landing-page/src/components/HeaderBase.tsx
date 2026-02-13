import { useState } from "react";

export default function HeaderBase() {
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleMobileMenu() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <div className="absolute inset-x-0 py-8">
        <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-340">
          <div className="relative flex flex-row items-center justify-between">
            <a href="/" aria-label="Go to homepage">
              <img
                src="/logo.svg"
                alt="Brand Logo"
                className="block object-contain"
              />
            </a>
            <nav className="not-lg:hidden">
              <ul className="flex flex-row items-center justify-start gap-12">
                {["About", "Services", "Projects"].map((item, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      className="text-preset-10 block text-white opacity-100 transition-opacity delay-75 ease-linear hover:opacity-75"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/"
                    className="text-preset-8 text-grey-950 block rounded-[28px] bg-white px-7 py-4 uppercase opacity-100 transition-all delay-75 ease-linear hover:bg-white/25 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              className="cursor-pointer p-1 lg:hidden"
              onClick={handleMobileMenu}
            >
              <img
                src="src/assets/icons/icon-hamburger.svg"
                alt="Icon Hamburger Menu"
                className="block object-contain"
              />
            </button>

            {isActive && (
              <div className="mobile-menu">
                <div className="relative mx-auto max-w-xs md:max-w-2xl">
                  <div className="bg-white py-10">
                    <ul className="flex flex-col items-center justify-start gap-8 text-center">
                      {["About", "Services", "Projects"].map((item, index) => (
                        <li key={index} className="w-full">
                          <a
                            href="/"
                            className="text-preset-9 text-grey-550 block opacity-100 transition-opacity delay-75 ease-linear hover:opacity-75"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="/"
                          className="text-preset-8 text-grey-950 hover:text-grey-950/75 block rounded-[28px] bg-yellow-500 px-9 py-4 uppercase transition-all delay-75 ease-linear"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
