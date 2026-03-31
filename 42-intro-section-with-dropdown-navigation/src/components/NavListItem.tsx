"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";

// Components
import NavListSubItem from "./NavListSubItem";

interface NavListItemProps {
  text: string;
  url: string;
  subItem?: NavSubItem[];
}

type NavSubItem = {
  id: number;
  url: string;
  icon?: string;
  name: string;
};

function NavListItem({ text, url, subItem }: NavListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <Link
        href={url}
        onClick={() => setIsOpen(!isOpen)}
        className="text-preset-6 group flex flex-row items-center justify-center gap-2 text-gray-500 transition delay-75 ease-linear hover:text-gray-950"
      >
        {text}
        {subItem ? (
          isOpen ? (
            <svg
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="transition delay-75 ease-out"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                d="m1 5 4-4 4 4"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="transition delay-75 ease-out"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          )
        ) : (
          ""
        )}
      </Link>
      {subItem ? isOpen ? <NavListSubItem subItems={subItem} /> : "" : ""}
    </li>
  );
}

export default NavListItem;
