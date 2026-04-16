"use client";

// React
import { useState } from "react";

// Motion (Framer Motion)
import { motion } from "motion/react"

// Component Styles
import styles from "@/components/ui/Toggle/Toggle.module.css";

interface ToggleProps{
    currentlySelected : (currently: string) => void;
}

export default function Toggle({currentlySelected}:ToggleProps) {
    const [isOn, setIsOn] = useState<boolean>(true);
    
    function toggleSwitch(){
        setIsOn(!isOn);
        
        if(isOn) currentlySelected("annually");
        else currentlySelected("monthly");
    }

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