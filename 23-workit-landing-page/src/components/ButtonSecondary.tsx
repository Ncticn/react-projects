import type { ReactNode } from "react";

type ButtonSecondaryProps = {
  link?: string;
  className?: string;
  children: ReactNode;
};

function ButtonSecondary({
  link,
  className,
  children = "Button",
}: ButtonSecondaryProps) {
  return (
    <a
      href={link}
      className={`${className} cursor-pointer inline-block text-white text-preset-5 border-b-4 border-green-base pb-2 transition-colors delay-75 ease-linear hover:text-green-base`}
    >
      {children}
    </a>
  );
}
export default ButtonSecondary;
