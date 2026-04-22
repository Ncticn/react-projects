"use client";

// React
import { useEffect, useState } from "react";

// NextJS
import Image from "next/image";

// Icons
import IconCheck from "@/assets/icons/icon-check.svg";

// Props
interface InputCheckboxProps {
    inputId: string;
    inputName: string;
    labelText: string;
    value: boolean;
    onChange?: (checked: boolean) => void;
}

export default function InputCheckbox({ inputId, inputName, labelText, onChange, value }: InputCheckboxProps) {
    const [checked, setChecked] = useState<boolean>(false);
    useEffect(() => {
        setChecked(value);
    }, [value]);

    const handleChange = (value: boolean) => {
        setChecked(value);
        onChange?.(!checked);
    }
    return (
        <div className="flex flex-row items-center justify-start gap-2.5">
            <input type="checkbox" name={inputName} id={inputId} checked={checked} onChange={(e) => handleChange(e.target.checked)} hidden />
            <div className={`inline-flex items-center justify-center cursor-pointer transition-all delay-75 ease-linear size-4 rounded-sm  ${checked ? "bg-purple-400 shadow-[0_0_0_4px_#D3A0FA] outline-2 outline-white" : "border dark:border-neutral-200 dark:hover:border-white border-neutral-900 hover:border-neutral-600 focus:bg-white focus:border-neutral-200 focus:shadow-[0_0_0_4px_#D3A0FA] focus:outline-2 focus:outline-white"}`}
                onClick={() => handleChange(!checked)}
            >
                {
                    checked && <Image src={IconCheck} alt="Icon Check" />
                }
            </div>
            <label htmlFor={inputId} className="text-preset-4 text-neutral-900 dark:text-neutral-200">{labelText}</label>
        </div>
    );
}