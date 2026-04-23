"use client";
// NextJS
import Image from "next/image";

// Icon
import IconCalculator from "@/assets/icons/icon-calculator.svg"

export default function ButtonSubmit() {
    return (
        <button type="submit" className="bg-lime px-11.5 py-4 rounded-full w-full flex flex-row items-stretch justify-center gap-3 transition delay-150 ease-linear cursor-pointer hover:bg-lime/50">
            <Image src={IconCalculator} alt="Icon Calculator" />
            <p className="text-preset-3 text-slate-900">Placeholder</p>
        </button>
    );
}