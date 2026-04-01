"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Data
import NavList from "@/data/NavList.json";

// Components
import BrandLogo from "@/assets/logo.svg";
import IconArrowDown from "@/assets/icons/icon-arrow-light.svg";
import IconArrowDownPink from "@/assets/icons/icon-arrow-dark.svg";
import IconHamburger from "@/assets/icons/icon-hamburger.svg";
import IconClose from "@/assets/icons/icon-close.svg";

function HeaderApp() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <header>
      <div className="mx-auto max-w-278 not-lg:hidden">
        <div className="flex flex-row items-center justify-between gap-0">
          <div className="flex flex-row items-center justify-start gap-16">
            <Link href={"#"} aria-label="Go to home">
              <Image src={BrandLogo} alt="Brand Logo" className="block" />
            </Link>

            <nav className="w-full">
              <ul className="flex flex-row items-center justify-start gap-8">
                {NavList.map((item) => {
                  const isActive = activeItem === item.id;

                  return (
                    <li key={item.id} className="relative">
                      <button
                        type="button"
                        className={`text-preset-6 leading-115% flex cursor-pointer flex-row items-center justify-center gap-2 font-bold text-white transition delay-75 ease-linear ${activeItem && !isActive ? "opacity-75" : "opacity-100"}`}
                        onClick={() => setActiveItem(isActive ? null : item.id)}
                      >
                        {item.name}
                        <Image src={IconArrowDown} alt="" />
                      </button>

                      {isActive && (
                        <div className="absolute top-8 -left-6 min-w-42 rounded-[5px] bg-white p-6 drop-shadow-[0px_10px_40px_rgba(0,0,0,5%)]">
                          <ul className="flex w-full flex-col items-start justify-start gap-0.5">
                            {item.subList.map((subItem) => (
                              <li key={subItem.id}>
                                <Link
                                  href={"#"}
                                  aria-label={`Go to ${subItem.name}`}
                                  className="font-Ubuntu tracking-0px text-base leading-8.25 font-normal text-purple-950 hover:font-bold"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="auth-links space-x-8">
            <Link
              href={"#"}
              className="text-preset-6 leading-115% font-bold text-white opacity-75 transition delay-75 ease-linear hover:opacity-100"
              aria-label="Go to Login"
            >
              Login
            </Link>
            <Link
              href={"#"}
              className="text-preset-6 leading-115% rounded-[28px] bg-white px-9.5 py-3.75 font-bold text-red-500 transition delay-75 ease-linear hover:bg-red-400 hover:text-white"
              aria-label="Go to Sing-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto not-lg:max-w-81.75 md:not-lg:max-w-172 lg:hidden">
        <div className="flex flex-row items-center justify-between gap-0">
          <Link href={"#"} className="max-w-20.25">
            <Image src={BrandLogo} alt="Go to homepage" />
          </Link>

          <button type="button" className="cursor-pointer">
            {!mobileMenu ? (
              <Image
                src={IconHamburger}
                alt=""
                onClick={() => setMobileMenu(true)}
              />
            ) : (
              <Image
                src={IconClose}
                alt=""
                onClick={() => setMobileMenu(false)}
              />
            )}
          </button>
        </div>

        {mobileMenu && (
          <div className="absolute top-16 z-10 h-max w-full rounded-[5px] bg-white px-6 py-8 drop-shadow-[0px_20px_40px_rgba(0,0,0,5%)]">
            <div className="flex flex-col items-center justify-start gap-6">
              <ul className="flex w-full flex-col items-center justify-start gap-8">
                {NavList.map((item) => {
                  const isActive = activeItem === item.id;

                  return (
                    <li key={item.id} className="w-full space-y-8">
                      <button
                        type="button"
                        aria-label={`Go to ${item.name}`}
                        className={`mx-auto flex cursor-pointer flex-row items-center justify-center gap-4 ${activeItem && !isActive ? "opacity-75" : "opacity-100"}`}
                        onClick={() => setActiveItem(isActive ? null : item.id)}
                      >
                        <span className="text-preset-6 leading-115% font-bold text-blue-900">
                          {item.name}
                        </span>
                        <Image src={IconArrowDownPink} alt="" />
                      </button>

                      {isActive && (
                        <div className="flex w-full flex-col items-center justify-center gap-0 rounded-[5px] bg-gray-100 py-5">
                          <ul className="flex flex-col items-center justify-start gap-2">
                            {item.subList.map((subItem) => (
                              <li key={subItem.id}>
                                <Link
                                  href={"#"}
                                  aria-label={`Go to ${subItem.name} page`}
                                  className="text-preset-6 leading-200% font-normal text-blue-900 opacity-75"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="block h-px w-full bg-gray-100"></div>
              <div className="auth-links flex flex-col items-center justify-start gap-6 md:flex-row md:gap-14">
                <Link
                  href={"#"}
                  aria-label="Go to login page"
                  className="text-preset-6 leading-115% font-bold text-blue-900"
                >
                  Login
                </Link>
                <Link
                  href={"#"}
                  aria-label="Go to sign-up"
                  className="text-preset-6 leading-115% rounded-[28px] bg-linear-to-br from-[#FF8F71] from-0% to-[#FF3E55] to-100% px-9.75 py-3.75 font-bold text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderApp;
