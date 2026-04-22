"use client";

// React
import { useEffect, useState } from "react";

// Components
import LogoDark from "@/components/ui/LogoDark";
import LogoLight from "@/components/ui/LogoLight";
import ButtonTheme from "@/components/ui/ButtonTheme";

export default function Header() {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    const root = window.document.documentElement.classList;

    function themeSwitch() {
        if (theme === "light") {
            root.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            root.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setTheme("dark");
            root.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }, []);


    return (
        <header>
            <div className="flex flex-row items-center justify-between gap-0">
                {
                    theme === "dark" ? <LogoDark /> : <LogoLight />
                }
                <ButtonTheme activeTheme={themeSwitch} theme={theme} />
            </div>
        </header>
    );
}