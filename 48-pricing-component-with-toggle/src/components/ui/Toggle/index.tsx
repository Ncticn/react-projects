"use client";


// React
import { useState } from "react";

// Motion (Framer Motion)
import { motion } from "motion/react"

// Component Styles
import styles from "@/components/ui/Toggle/Toggle.module.css";


export default function Toggle() {
    const [isOn, setIsOn] = useState<boolean>(false);
    const toggleSwitch = () => setIsOn((prev) => !prev);

    return (
        <div className={styles.toggleContainer}>
            <p className={styles.toggleTitles + " text-preset-5"}>Annually</p>
            <button
                type="button"
                className={`${styles.toggle} ${isOn ? "justify-end" : "justify-start"}`}
                onClick={toggleSwitch}
            >
                <motion.span
                    layout
                    className={styles.toggleHandle}
                    transition={{
                        type: "spring",
                        visualDuration: 0.2,
                        bounce: 0.2
                    }}
                >
                </motion.span>
            </button>
            <p className={styles.toggleTitles + " text-preset-5"}>Monthly</p>
        </div>
    );
}