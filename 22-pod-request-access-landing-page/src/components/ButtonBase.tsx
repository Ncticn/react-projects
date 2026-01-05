import type { ReactNode } from "react";

interface ButtonBaseProps {
  children?: ReactNode;
  type: "button" | "reset" | "submit";
}

export default function ButtonBase({
  type,
  children = "Hover Me",
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      className="rounded-[28px] px-8 py-2 overflow-hidden cursor-pointer flex items-center justify-center gap-2 bg-green-base text-blue-950 text-preset-3  not-md:w-full md:absolute not-md:inset-x-0 md:right-1 md:top-1 md:bottom-1 before:absolute md:before:inset-0 before:bg-white/50 before:opacity-0 before:transition-opacity before:mix-blend-overlay before:duration-200 z-10 before:z-0 hover:before:opacity-100"
    >
      {children}
    </button>
  );
}
