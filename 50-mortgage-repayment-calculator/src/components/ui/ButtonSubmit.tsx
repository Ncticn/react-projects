"use client";
// NextJS
import Image from "next/image";

// Icon
import IconCalculator from "@/assets/icons/icon-calculator.svg";

export default function ButtonSubmit() {
  return (
    <button
      type="submit"
      className="bg-lime hover:bg-lime/50 flex w-full cursor-pointer flex-row items-stretch justify-center gap-3 rounded-full px-11.5 py-4 transition delay-150 ease-linear md:w-fit"
    >
      <Image src={IconCalculator} alt="Icon Calculator" loading="eager" />
      <p className="text-preset-3 text-slate-900">Calculate Repayments</p>
    </button>
  );
}
