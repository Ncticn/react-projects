"use client";

// React
import { useState } from "react";

// NextJS
import Image from "next/image";

// Images
import IconInfo from "@/assets/icons/icon-info.svg";

export default function InputTextarea() {
    const [value, setValue] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);

    function handleChange(v: string) {
        setValue(v)

        if (v.length > 300) setErr(true);
        else setErr(false);
    }


    return (
        <div className="form-input-item flex flex-col items-start justify-start gap-3">
            <textarea
                placeholder="Start typing here… (or paste your text)"
                className={`w-full h-50 px-5 py-5 text-preset-3 rounded-xl outline-0 border-2 text-neutral-700 border-neutral-200 focus:drop-shadow-[0_0_10px_#D3A0FA] focus:border-purple-500 bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 focus:placeholder:text-neutral-900 placeholder:text-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-800 dark:placeholder:text-neutral-200 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-purple-500 dark:focus:placeholder:text-neutral-200 ${err && "border-orange-800! focus:border-orange-800! drop-shadow-[0_0_8px_#DA3701] dark:drop-shadow-[0_0_8px_#FE8159] dark:border-orange-500! dark:focus:border-orange-500!"}`}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            ></textarea>
            {err &&
                <div className="flex flex-row items-center justify-start gap-2">
                    <Image src={IconInfo} alt="Icon Info" />
                    <span className="text-preset-4 text-orange-800 dark:text-orange-500">Limit reached! Your text exceeds 300 characters.</span>
                </div>
            }
        </div>
    );
}