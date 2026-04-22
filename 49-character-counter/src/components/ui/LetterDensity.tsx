"use client";

// React
import { useState } from "react";

// Components
import ProgressBar from "./ProgressBar";


function LetterDensity({ text }: { text: string }) {

    const [showAll, setShowAll] = useState<boolean>(false);
    const result: Record<string, number> = {};

    const cleanText = text.toLowerCase().trim();

    for (let i = 0; i < cleanText.length; i++) {

        const char = cleanText[i];

        if (char >= "a" && char <= "z") {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    const lettersArray = Object.entries(result);

    lettersArray.sort((a, b) => b[1] - a[1]);

    return (
        <div className="flex flex-col items-stretch justify-center gap-5">
            <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-200">Letter Density</h2>
            <ul className="flex flex-col items-start justify-start gap-3">
                {
                    lettersArray.slice(0, showAll ? lettersArray.length : 5)
                        .map(([key, value]) => <li className="flex flex-row items-center justify-start gap-3.5 w-full" key={key}>
                            <div className="item-label w-5">
                                <p className="text-preset-4 dark:text-neutral-200 text-neutral-900">
                                    {key.toUpperCase()}
                                </p>
                            </div>
                            <ProgressBar value={value} />
                            <div className="w-25">
                                <p className="text-preset-4 dark:text-neutral-200 text-neutral-900 text-nowrap text-end">
                                    {value} ({((value / cleanText.length) * 100).toFixed(2)}%)
                                </p>
                            </div>
                        </li>)
                }
            </ul>
            {
                lettersArray.length > 5 ? <button
                    type="button"
                    aria-expanded={showAll}
                    onClick={() => setShowAll((prev) => !prev)}
                    className="text-preset-3 text-neutral-900 dark:text-neutral-200 cursor-pointer inline-flex w-fit flex-row items-center justify-center gap-2"
                >
                    {showAll ? "See less" : "See more"}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className={`size-5 transition delay-150 ease-linear ${showAll ? "rotate-180" : "rotate-0"}`}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m19.5 8.25-7.5 7.5-7.5-7.5'
                        />
                    </svg>
                </button> : ""
            }
        </div>
    );
}

export default LetterDensity;