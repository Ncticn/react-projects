import { useState } from "react";

interface NavListProps {
  itemList: string[];
}

function NavList(props: NavListProps) {
  return (
    <nav className="not-lg:hidden">
      <ul className="flex flex-row items-center justify-start gap-10">
        {props.itemList.map((item, index) => (
          <li key={index}>
            <a
              href="/"
              target="_self"
              className="text-preset-6 text-navy-600 block hover:text-red-500"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function HeaderBase() {
  const navList: string[] = [
    "Home",
    "New",
    "Popular",
    "Trending",
    "Categories",
  ];
  const [isActive, setIsActive] = useState(false);

  function handleButtonMenu() {
    console.log(isActive);
    setIsActive(!isActive);
  }

  return (
    <header>
      <div className="">
        <div className="flex flex-row items-stretch justify-between">
          <a href="/" target="_self" aria-label="Go to Homepage">
            <img
              src="/logo.svg"
              alt="Company Logo"
              className="h-auto max-w-full object-contain"
            />
          </a>
          <NavList
            itemList={["Home", "New", "Popular", "Trending", "Categories"]}
          />
          <button
            type="button"
            className="cursor-pointer lg:hidden"
            onClick={handleButtonMenu}
          >
            <img
              src="src/assets/icons/icon-menu.svg"
              alt="Icon Hamburger Menu"
            />
          </button>
          {isActive && (
            <div className="fixed inset-0 flex flex-row">
              <div className="bg-navy-950 h-full w-[30%] opacity-50 md:w-[60%]"></div>
              <div className="z-10 h-full w-[70%] space-y-22 bg-white px-9 py-7 opacity-100 md:w-[40%]">
                <div className="relative block">
                  <button
                    type="button"
                    className="absolute top-1 -right-5 inline-block cursor-pointer md:right-11"
                    onClick={handleButtonMenu}
                  >
                    <img
                      src="src/assets/icons/icon-menu-close.svg"
                      alt="Icon Hamburger Close Menu"
                      className="object-contain"
                    />
                  </button>
                </div>
                <nav>
                  <ul className="flex flex-col items-stretch justify-start gap-6">
                    {navList.map((item, index) => (
                      <li key={index}>
                        <a
                          href="/"
                          target="_self"
                          className="text-navy-950 block text-lg leading-6 font-normal hover:text-red-500"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
