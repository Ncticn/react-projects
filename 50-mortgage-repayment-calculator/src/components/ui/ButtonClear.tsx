"use client";

// Props
interface ButtonClearProps {
    label?: string;
}
export default function ButtonClear({ label= "Button" }: ButtonClearProps) {
    return (
        <button
            type="reset"
            className="text-preset-4 cursor-pointer text-slate-700 underline underline-offset-4 transition delay-150 ease-linear hover:text-slate-900"
        >
            {label}
        </button>
    );
}