import type { ReactNode } from "react";

type ButtonPrimaryProps = {
  link?: string;
  className?: string;
  children: ReactNode;
};

function ButtonPrimary({
  link,
  className,
  children = "Button",
}: ButtonPrimaryProps) {
  return (
    <a
      href={link}
      className={`cursor-pointer inline-block text-purple-900 border-2 border-transparent text-preset-5 px-8 py-3 bg-green-base transition-colors delay-75 ease-linear hover:bg-transparent hover:text-green-base hover:border-green-base ${
        className ? className : ""
      }`}
    >
      {children}
    </a>
  );
}
export default ButtonPrimary;
