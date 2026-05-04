"use client";

// NextJS
import Image from "next/image";

// Props
interface CardLimitationProps {
  icon: string;
  title: string;
  description: string;
}

export default function CardLimitation({
  icon,
  title,
  description,
}: CardLimitationProps) {
  return (
    <div className="card-limitation h-full w-full max-w-91.25 *:h-full *:w-full">
      <div className="rounded-2xl bg-white px-6 py-6 drop-shadow-[16px_32px_56px_rgba(143,174,207,0.25)]">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="card-limitation-header flex flex-row items-center justify-start gap-4">
            <Image src={icon} alt="" loading="eager" className="size-8" />
            <h3 className="text-preset-5 text-blue-900">{title}</h3>
          </div>

          <p className="text-preset-6 text-grey-500 font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
