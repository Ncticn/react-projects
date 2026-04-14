"use client"

// NextJS
import Image from "next/image";

// Icons
import IconUp from "@/src/assets/icons/icon-up.svg";
import IconDown from "@/src/assets/icons/icon-down.svg";

// Utility Function
import PercentageDifference from "@/src/utils/PercentageDifference ";

// Props
interface CardValueComparisonProps {
    description: string,
    type: "percent" | "difference"
    newValue: number,
    oldValue: number,
}

function CardValueComparison({ newValue, oldValue, description, type }: CardValueComparisonProps) {
    let result: number = newValue - oldValue;;

    if (type === "percent") {
        result = PercentageDifference(newValue, oldValue);
    }

    return (
        <div className="flex flex-row items-center justify-center gap-2">
            {
                result > 0
                    ? <Image src={IconUp} alt="Icon Up" />
                    : <Image src={IconDown} alt="Icon Down" />
            }
            <span className={`text-preset-6 ${result > 0 ? "text-green-500" : "text-red-500"} `}>
                {result.toString().replace("-", "")}
                {description}
            </span>
        </div>
    );
}

export default CardValueComparison;