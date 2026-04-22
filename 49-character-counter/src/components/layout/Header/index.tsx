"use client";

// React
import { useEffect, useState } from "react";

// Components
import LogoDark from "@/components/ui/LogoDark";
import LogoLight from "@/components/ui/LogoLight";
import ButtonTheme from "@/components/ui/ButtonTheme";

export default function Header() {
    const [theme, setTheme] = useState<"dark" | "light">("light");


    function themeSwitch() {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, [theme]);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
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