"use client";

// NextJS
import Image from "next/image";

// Icons
import IconSun from "@/assets/icons/icon-sun.svg";
import IconMoon from "@/assets/icons/icon-moon.svg";

interface ButtonThemeProps {
    activeTheme?: () => void;
    theme: string;
}

export default function ButtonTheme({ activeTheme, theme }: ButtonThemeProps) {
    return (
        <button
            type="button"
            className="dark:bg-neutral-700 bg-neutral-100 rounded-lg size-11 cursor-pointer flex items-center justify-center gap-0"
            onClick={activeTheme}
        >
            {
                theme === "dark" ? <Image src={IconSun} alt="Icon Sun" loading="eager" /> : <Image src={IconMoon} alt="Icon Sun" loading="eager" />
            }
        </button>
    );
}