"use client"
import { useState } from "react";

interface InputEmailProps {
    inputID: string;
    inputName: string;
}

export default function InputEmail() {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);

    let inputClass = "border-grey bg-white";

    if (inputValue) {
        inputClass = "border-blue-800 bg-white text-blue-800"
        if (error) {
            inputClass = "border-red bg-red-100 text-red"
        }
    }



    return (
        <div className="flex flex-col gap-2 items-start justify-start">
            <div className="flex flex-row items-center justify-between w-full">
                <label htmlFor="input-user-email" className="text-preset-3 text-blue-800">Email address</label>
                <span className={`text-preset-3 text-red ${error ? "opacity-100" : "opacity-0"} transition delay-75 ease-linear`}>Valid email required</span>
            </div>
            <input type="email" name="input-email" id="input-user-email" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={`px-6 py-4 rounded-lg outline-0 border text-preset-2 font-normal invalid:border-blue-800 transition delay-75 ease-linear ${inputClass}`} placeholder="email@company.com" />
        </div>
    );
}