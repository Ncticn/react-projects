import { useState } from "react";

export default function HeaderApp() {
  const [isClickMenu, setIsClickMenu] = useState(false);
  const navLinks = [
    { id: 1, name: "About", url: "#" },
    { id: 2, name: "Careers", url: "#" },
    { id: 3, name: "Events", url: "#" },
    { id: 4, name: "Products", url: "#" },
    { id: 5, name: "Support", url: "#" },
  ];
  return (
    <header>
      <div className="bg-transparent px-6 py-10">
        <div className="mx-auto md:max-w-152 lg:max-w-277.5">
          <div className="flex flex-row items-center justify-between">
            <a href="#" className="lg:mb-2">
              <img
                src="/logo.svg"
                alt="Company Logo"
                className="block h-6 object-contain md:h-8"
              />
            </a>
            <nav className="hidden lg:block">
              <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start lg:gap-8">
                {navLinks.map((navLink) => (
                  <li key={navLink.id}>
                    <a
                      href={navLink.url}
                      className="text-preset-6 block text-white after:mx-auto after:mt-2 after:block after:h-0.5 after:w-6 after:bg-white after:opacity-0 after:transition-all after:delay-75 after:ease-linear hover:after:opacity-100"
                      aria-label={`Go to ${navLink.name}`}
                    >
                      {navLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="relative z-10 inline-block cursor-pointer lg:hidden"
              onClick={() => setIsClickMenu(!isClickMenu)}
            >
              {isClickMenu ? (
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                    fill="#FFF"
                    fill-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fill-rule="evenodd">
                    <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                  </g>
                </svg>
              )}
            </button>

            {isClickMenu && (
              <div className="mobile-menu absolute inset-0 h-screen">
                <div className="h-full bg-black px-6 py-10">
                  <div className="flex flex-col items-start justify-between gap-40">
                    <a href="#" className="mb-2">
                      <img
                        src="/logo.svg"
                        alt="Company Logo"
                        className="block h-6 object-contain md:h-8"
                      />
                    </a>
                    <nav>
                      <ul className="flex flex-col gap-6">
                        {navLinks.map((navLink) => (
                          <li key={navLink.id}>
                            <a
                              href={navLink.url}
                              className="text-preset-5 text-white uppercase"
                              aria-label={`Go to ${navLink.name}`}
                            >
                              {navLink.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
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
