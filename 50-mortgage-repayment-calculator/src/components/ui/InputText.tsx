"use client";

import { useState } from "react";

export default function InputText() {
    const [err, setErr] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("Error text");

    return (
        <div className="flex flex-col items-start justify-center gap-3">
            <label htmlFor="input-text-title" className="text-preset-4 text-slate-700">Title</label>
            <div className={`w-full *:h-full *:w-fit border-2 group focus-within:border-lime transition delay-150 ease-linear hover:border-slate-900 rounded-sm overflow-hidden relative ${err ? "border-red" : "border-slate-500"}`}>
                <button type="button" className={`px-4 py-3 text-center cursor-pointer text-preset-3 transition delay-150 ease-linear group-focus-within:bg-lime group-focus-within:text-slate-900 ${err ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}>Prefix</button>
                <input type="text" className="px-4 py-3 text-preset-3 text-slate-900 outline-0" />
            </div>
            {err && <span className="text-preset-5 text-red">{message}</span>}
        </div>
    );
}