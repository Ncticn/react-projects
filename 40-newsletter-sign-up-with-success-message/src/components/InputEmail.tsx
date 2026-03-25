"use client"

import { useState } from "react";

import UtilValidationEmail from "@/utils/UtilValidationEmail";

interface InputEmailProps {
    inputID: string;
    inputName?: string;
    inputLabel: string;
    placeholder?: string;
    onChange?: ((inputEmail: string, isValid: boolean) => void);
}

export default function InputEmail({ inputLabel = "Label", placeholder = "example@email.com", inputID, inputName = "input-user-email", onChange }: InputEmailProps) {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);

    let inputClass = "border-grey bg-white"

    if (inputValue !== "") {
        inputClass = "border-blue-800 bg-white text-blue-800";
        if (error) {
            inputClass = "border-red bg-red-100 text-red"
        }
    }


    function handleOnChange(value: string) {
        setInputValue(value);

        const result = UtilValidationEmail(value);
        setError(!result.isValid);
        if (onChange) onChange(value, result.isValid);
    }


    return (
        <div className="form-input-item flex flex-col gap-2 items-start justify-start w-full **:w-full">
            <div className="flex flex-row items-center justify-between">
                <label htmlFor={inputID} className="text-preset-3 text-blue-800">{inputLabel}</label>
                <span className={`text-preset-3 text-red text-end ${error && inputValue ? "opacity-100" : "opacity-0"} transition delay-75 ease-linear`}>Valid email required</span>
            </div>
            <input type="email" name={inputName} id={inputID} value={inputValue} onChange={(e) => handleOnChange(e.target.value)} className={`px-6 py-4 rounded-lg outline-0 border text-preset-2 font-normal transition delay-75 ease-linear ${inputClass}`} placeholder={placeholder} />
        </div>
    );
}