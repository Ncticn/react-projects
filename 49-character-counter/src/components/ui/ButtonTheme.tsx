"use client";
// React
import { useEffect, useState } from "react";

// NextJS
import Image from "next/image";

// Icons
import IconSun from "@/assets/icons/icon-sun.svg";
import IconMoon from "@/assets/icons/icon-moon.svg";

export default function ButtonTheme() {
    const [isDark, setIsDark] = useState<boolean>(false);

    const root = window.document.documentElement;

    const handleClick = () => {
        if (!isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        setIsDark(prev => !prev);
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme === "dark") {
            setIsDark(true);
            root.classList.add("dark");
        }

    }, []);


    return (
        <button
            type="button"
            className="dark:bg-neutral-700 bg-neutral-100 rounded-lg size-11 cursor-pointer flex items-center justify-center gap-0"
            onClick={handleClick}
        >
            {
                isDark ? <Image src={IconSun} alt="Icon Sun" loading="eager" /> : <Image src={IconMoon} alt="Icon Sun" loading="eager" />
            }
        </button>
    );
}