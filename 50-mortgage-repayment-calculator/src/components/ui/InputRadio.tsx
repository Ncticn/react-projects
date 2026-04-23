"use client";

import { useState } from "react";

interface InputRadioProps {
    state?: (checked: boolean) => void;
}

export default function InputRadio({ state }: InputRadioProps) {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = () => {
        setChecked(() => !checked);
        state?.(!checked);
    }

    return (
        <div className="input-item">
            <input type="radio" name="input-checkbox" id="input-checkbox-placeholder" onChange={handleChange} />

            <label className={`w-fit rounded-sm border-2  px-4 py-3 flex flex-row gap-4 cursor-pointer hover:border-lime transition delay-150 ease-linear ${checked ? "bg-lime/15 border-lime" : "bg-transparent border-slate-500"}`} htmlFor="input-checkbox-placeholder">
                <div className={`size-6 overflow-hidden rounded-full border-2 transition delay-150 ease-linear p-0.75 flex items-center justify-center ${checked ? "border-lime" : "border-slate-700"}`}>
                    {checked && <span className="w-full h-full inline-block rounded-full bg-lime"></span>}
                </div>
                <span className="text-preset-3 inline-block text-slate-900">Placeholder</span>
            </label>
        </div>
    );
}