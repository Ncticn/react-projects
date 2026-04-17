"use client";

import { ReactNode } from "react";

interface CardStatsProps {
    title: string;
    counter: string;
    children: ReactNode;
    cardClass?: string;
}

export default function CardStats({ title, counter, children, cardClass}: CardStatsProps) {
    return (
        <div className="card-satats">
            <div className={`px-4 py-4 rounded-xl w-full h-full relative overflow-hidden ${cardClass}`}>
                <div className="flex flex-col items-start h-full justify-center gap-1.25 z-20 relative">
                    <div className="text-start text-neutral-900 space-y-1.5">
                        <p className="text-preset-1">{counter}</p>
                        <h3 className="text-preset-3">{title}</h3>
                    </div>
                </div>
                <div className="absolute -right-13 md:-right-18 lg:-right-7 -inset-y-2 size-37.5 z-10">
                    {children}
                </div>
            </div>
        </div>
    );
}