import type { ReactNode } from "react";

interface ButtonBaseProps {
  children?: ReactNode;
  type: "button" | "reset" | "submit";
  className?: string;
}

export default function ButtonBase({
  type,
  children = "Button",
  className,
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      className={`${className} relative rounded-[28px] px-8 py-2 overflow-hidden cursor-pointer flex items-center justify-center gap-2 bg-green-base text-blue-950 text-preset-3 before:absolute md:before:inset-0 before:bg-white/50 before:opacity-0 before:transition-opacity before:mix-blend-overlay before:duration-200 z-10 before:z-0 hover:before:opacity-100`}
    >
      {children}
    </button>
  );
}
