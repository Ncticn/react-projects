"use client";

// React
import { useEffect, useState } from "react";

// NextJS
import Image from "next/image";

// Images
import IconInfo from "@/assets/icons/icon-info.svg";

// Components
import InputCheckbox from "./InputCheckbox";

// Props
interface TextAnalyzerProps {
    text: (userText: string, isIncluding: boolean, maxLength?: number) => void;
}

export default function TextAnalyzer({ text }: TextAnalyzerProps) {
    const [userValue, setUserValue] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);
    const [excludeSpace, setExcludeSpace] = useState<boolean>(false);
    const [characterLimit, setCharacterLimit] = useState<boolean>(false);
    const [characterLimitValue, setCharacterLimitValue] = useState("0");

    const handleExcludeSpace = (value: boolean) => setExcludeSpace(value);

    const handlecharacterLimit = (value: boolean) => {
        if (value == true) {
            setCharacterLimit(value);
        }
        else {
            setCharacterLimit(value);
            setCharacterLimitValue("");

        }
    };

    const handlecharacterLimitValue = (value: string) => {
        const cleanText = value.trim();
        const onlyNumbers = cleanText.replace(/[^0-9]/g, "");
        setCharacterLimitValue(onlyNumbers);
    }

    useEffect(() => {

        if (characterLimit) {
            if (characterLimitValue) {
                if (excludeSpace) {
                    const userText = userValue;
                    userText.length > Number(characterLimitValue) ? setErr(true) : setErr(false);
                    text(userText, excludeSpace, Number(characterLimitValue));
                } else {
                    const userText = userValue.trim();
                    userText.replaceAll(" ", "").length > Number(characterLimitValue) ? setErr(() => true) : setErr(() => false);
                    text(userText.trim(), excludeSpace, Number(characterLimitValue));
                }
            }
        } else {
            setErr(() => false);
            if (excludeSpace) {
                text(userValue, excludeSpace);
            } else {
                text(userValue.trim(), excludeSpace);
            }

        }

    }, [userValue, characterLimit, characterLimitValue, excludeSpace])


    return (
        <div className="space-y-4">
            <div className="space-y-3">
                <textarea
                    placeholder="Start typing here… (or paste your text)"
                    className={`w-full resize-none h-50 px-5 py-5 text-preset-3 rounded-xl outline-0 border-2 text-neutral-700 border-neutral-200 focus:drop-shadow-[0_0_10px_#D3A0FA] focus:border-purple-500 bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 focus:placeholder:text-neutral-900 placeholder:text-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-800 dark:placeholder:text-neutral-200 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-purple-500 dark:focus:placeholder:text-neutral-200 ${err && "border-orange-800! focus:border-orange-800! drop-shadow-[0_0_8px_#DA3701] dark:drop-shadow-[0_0_8px_#FE8159] dark:border-orange-500! dark:focus:border-orange-500!"}`}
                    value={userValue}
                    onChange={(e) => { setUserValue(e.target.value) }}
                >

                </textarea>
                {
                    err && <div className="flex flex-row items-center justify-start gap-2">
                        <Image src={IconInfo} alt="Icon Info" />
                        <span className="text-preset-4 text-orange-800 dark:text-orange-500">Limit reached! Your text exceeds {characterLimitValue} characters.</span>
                    </div>
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-start justify-center md:justify-start md:items-center min-h-7.75">
                <InputCheckbox inputId="input-checkbox_excludeSpace" inputName="input-excludeSpace" labelText="Exclude Space" value={excludeSpace} onChange={handleExcludeSpace} />
                <div className="flex flex-row items-center justify-start gap-2.5">
                    <InputCheckbox inputId="input-checkbox-character-limit" inputName="input-character-limit" labelText="Set Character Limit" value={characterLimit} onChange={handlecharacterLimit} />
                    {
                        characterLimit &&
                        <input type="text" name="input-text_max-lenght" id="input-text_maxLength" className="px-3 py-1 rounded-md outline-0 border border-neutral-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 bg-white text-preset-4 text-neutral-900 w-14" value={characterLimitValue} onChange={(e) => handlecharacterLimitValue(e.target.value)} />
                    }
                </div>
                <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 md:ms-auto">Approx. reading time: {"<"}1 minute</p>
            </div>
        </div>
    );
}