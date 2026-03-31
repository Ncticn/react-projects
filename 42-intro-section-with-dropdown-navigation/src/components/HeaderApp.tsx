"use client";

// React
import { useState } from "react";

// Nexts
import Link from "next/link";
import Image from "next/image";

// Components
import ButtonSecondary from "./ButtonSecondary";
import NavListItem from "./NavListItem";
import IconArrowDown from "@/assets/icons/icon-arrow-down.svg";
import IconArrowUp from "@/assets/icons/icon-arrow-up.svg";

// Data
import NavList from "@/data/navList.json";

function HeaderApp() {
  return (
    <header className="z-50">
      <div className="mx-auto max-w-85.75 md:max-w-172 lg:max-w-339.5">
        <div className="hidden flex-row items-center justify-between lg:flex">
          <div className="flex flex-row items-center justify-start gap-16">
            <Link href={"/"} aria-label="Homepage">
              <Image src={"/logo.svg"} alt="Snap Logo" width={84} height={27} />
            </Link>

            <nav aria-label="Main navigation">
              <ul className="flex flex-row items-center justify-start gap-10">
                {NavList.map((item) => (
                  <NavListItem
                    key={item.id}
                    text={item.name}
                    url={item.url}
                    subItem={item.subList}
                  />
                ))}
              </ul>
            </nav>
          </div>

          <div className="auth-links flex flex-row items-center justify-start gap-10">
            <Link
              href={"/"}
              className="text-preset-6 text-gray-500 transition delay-75 ease-linear hover:text-gray-950"
            >
              Login
            </Link>
            <ButtonSecondary text="Register" />
          </div>
        </div>

        <HeaderMobile />
      </div>
    </header>
  );
}

function HeaderMobile() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between lg:hidden">
      <Link href={"/"} aria-label="Go to homepage">
        <Image src={"/logo.svg"} alt="Snap Logo" width={87} height={35} />
      </Link>

      <button type="button" onClick={() => setIsActive(!isActive)}>
        {isActive ? (
          <Image
            src={"/assets/icons/icon-close-menu.svg"}
            alt="Icon Close Hamburger Menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={"/assets/icons/icon-menu.svg"}
            alt="Icon Hamburger Menu"
            width={32}
            height={18}
            className="cursor-pointer"
          />
        )}
      </button>

      {isActive && (
        <div className="absolute inset-0 before:absolute before:h-screen before:w-full before:bg-black before:opacity-75">
          <div className="relative float-right h-full w-3xs space-y-8 bg-white px-4 py-6 md:w-2xs md:px-10 md:py-7">
            <div className="text-end">
              <button type="button" className="z-10">
                <Image
                  src={"/assets/icons/icon-close-menu.svg"}
                  alt="Icon Close Hamburger Menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                  onClick={() => setIsActive(false)}
                />
              </button>
            </div>

            <ul className="flex flex-col items-start justify-start gap-4">
              {NavList.map((item, index) => (
                <NavListItemMobile
                  key={index}
                  text={item.name}
                  url={item.url}
                  subItem={item?.subList}
                />
              ))}
            </ul>

            <div className="space-y-4">
              <Link
                href={"/login"}
                className="text-preset-6 block text-center text-gray-500"
              >
                Login
              </Link>
              <div className="*:w-full">
                <ButtonSecondary text="Register" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavListItemMobile({
  text,
  url,
  subItem,
}: {
  text: string;
  url: string;
  subItem?: { id: number; name: string; url: string; icon?: string }[];
}) {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <li className="flex flex-col items-start justify-start gap-4">
      {subItem ? (
        <button
          type="button"
          className="text-preset-5 tracking-0px flex cursor-pointer flex-row items-center justify-center gap-4 font-medium text-gray-500"
          onClick={() => setSubMenu(!subMenu)}
        >
          {text}
          {subMenu ? (
            <Image src={IconArrowUp} alt="" width={10} height={10} />
          ) : (
            <Image src={IconArrowDown} alt="" width={10} height={10} />
          )}
        </button>
      ) : (
        <Link
          href={url}
          aria-label="Go to home"
          className="text-preset-5 tracking-0px font-medium text-gray-500"
        >
          {text}
        </Link>
      )}

      {subMenu && (
        <ul className="flex flex-col items-start justify-start gap-4 px-6 transition delay-75 ease-linear">
          {subItem?.map((subItem, index) => (
            <NavListSubItemMobile
              key={index}
              text={subItem.name}
              url={subItem.url}
              icon={subItem.icon}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function NavListSubItemMobile({
  text,
  url,
  icon,
}: {
  text: string;
  url: string;
  icon?: string;
}) {
  return (
    <li>
      <Link
        href={url}
        aria-label={`Go to ${text}`}
        className="flex flex-row items-start justify-start gap-4"
      >
        {icon && (
          <Image src={icon} alt={`Icon ${text}`} width={20} height={20} />
        )}
        <span className="text-preset-5 tracking-0px font-medium text-gray-500">
          {text}
        </span>
      </Link>
    </li>
  );
}

export default HeaderApp;
