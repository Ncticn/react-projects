import { useState } from "react";

export default function HeaderApp() {
  const navLinks = [
    {
      id: 1,
      name: "Product",
      url: "#",
    },
    {
      id: 2,
      name: "Features",
      url: "#",
    },
    {
      id: 3,
      name: "Pricing",
      url: "#",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="relative mx-auto max-w-77.75 md:max-w-152 lg:max-w-277.5">
        <div className="flex flex-row items-center justify-between">
          <a href="/">
            <img
              src="/logo.svg"
              alt="Company Logo"
              className="block object-contain"
            />
          </a>
          {window.screen.width > 768 ? (
            <nav>
              <ul className="hidden flex-row items-center justify-center gap-10 lg:flex">
                {navLinks.map((navLink) => (
                  <NavItem
                    id={navLink.id}
                    name={navLink.name}
                    url={navLink.url}
                  />
                ))}
                <li>
                  <div className="size-1.5 rounded-full bg-blue-950 opacity-15"></div>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-preset-4 tracking-1px block border-b-2 border-transparent font-bold text-blue-950 uppercase opacity-50 transition-all delay-75 ease-linear hover:border-blue-950"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <>
              <button
                type="button"
                className="cursor-pointer lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="#242942"
                      fill-rule="evenodd"
                      d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="16"
                  >
                    <g fill="#242942" fill-rule="evenodd">
                      <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                    </g>
                  </svg>
                )}
              </button>
              {isOpen && (
                <div className="mobile-menu absolute inset-x-0 top-18 drop-shadow-[0px_5px_10px_rgba(0,0,0,15%)] lg:hidden">
                  <div className="rounded-[3px] bg-white px-10 py-5.75">
                    <div className="flex flex-col items-stretch justify-start gap-6">
                      <ul className="flex flex-col items-center justify-start gap-6">
                        {navLinks.map((navLink) => (
                          <NavItem
                            id={navLink.id}
                            name={navLink.name}
                            url={navLink.url}
                          />
                        ))}
                      </ul>
                      <div className="divider h-px w-full bg-blue-950 opacity-15"></div>
                      <a
                        href="#"
                        aria-label="Go to Login"
                        className="font-barlow-condensed leading-125% tracking-1.2px inline-block text-center text-lg font-bold text-blue-950 uppercase opacity-50"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

type NavItemProps = {
  id: number;
  name: string;
  url: string;
};

function NavItem({ id, name, url }: NavItemProps) {
  return (
    <li key={id}>
      <a
        href={url}
        aria-label={`Go to ${name}`}
        className="font-barlow-condensed leading-125% tracking-1.2px lg:text-md lg:leading-120% lg:tracking-1px block text-lg font-bold text-blue-950 uppercase transition-all delay-75 ease-linear lg:border-b-2 lg:border-transparent lg:hover:border-blue-950"
      >
        {name}
      </a>
    </li>
  );
}
