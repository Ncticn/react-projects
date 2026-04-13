"use client";

// React
import { useEffect, useState } from "react";

// Component Styles
import styles from "@/src/components/ui/Toggle/Toggle.module.css";

// Framer Motion
import { motion } from "motion/react"


function Toggle() {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(()=> {
        const theme = localStorage.getItem("theme");

        if(theme === "dark"){
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            className={`dark:bg-linear-to-tr dark:from-0% dark:from-[#388FE7] dark:to-100% dark:to-[#40DB82] ${styles.toggle_Button}`}
            onClick={() => setIsDark((prev) => !prev)}
        >
            <motion.div
                className={`${styles.toggle_Slider} dark:bg-navy-950  ${isDark ? "right-0.75" : "left-0.75"}`}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2
                }}
            >
            </motion.div>

        </button >
    );
}

export default Toggle;