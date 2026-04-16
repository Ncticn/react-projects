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
                className={`bg-neutral-800 resize-none border-neutral-700 drop-shadow-[0px_2px_5px_rgba(15,15,15,4%)] min-h-50 w-full rounded-xl px-5 py-5 border-2  text-preset-3 text-neutral-200 hover:bg-neutral-700 hover:border-neutral-600 outline-0 ${err ? "focus:border-orange-500 focus:drop-shadow-[0px_0px_8px_#FE8159] border-orange-500 drop-shadow-[0px_0px_8px_#FE8159]" : "focus:border-purple-500 focus:drop-shadow-[0px_0px_10px_#D3A0FA]"}`}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            ></textarea>
            {err &&
                <div className="flex flex-row items-center justify-start gap-2">
                    <Image src={IconInfo} alt="Icon Info" />
                    <span className="text-preset-4 text-orange-500">Limit reached! Your text exceeds 300 characters.</span>
                </div>
            }
        </div>
    );
}