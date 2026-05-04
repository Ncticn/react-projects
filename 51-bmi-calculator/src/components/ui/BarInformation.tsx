"use client";

// React
import { ReactNode } from "react";

// Motion
import { motion } from "motion/react";

// Props
interface BarInformationProps {
  bmi?: number;
  children: ReactNode;
}

export default function BarInformation({ bmi, children }: BarInformationProps) {
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        visualDuration: 0.2,
        bounce: 0.2,
      }}
      className="relative h-full w-full overflow-hidden rounded-l-2xl rounded-r-2xl bg-blue-500 px-8 py-8 md:rounded-r-[100px]"
    >
      {bmi && children ? (
        <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex flex-col items-start justify-center gap-2">
            <h6 className="text-preset-6 font-semibold text-white">
              Your BMI is...
            </h6>
            <p className="text-preset-1 text-white">{bmi.toFixed(1)}</p>
          </div>
          <p className="text-preset-7 text-start font-normal text-pretty text-white md:max-w-1/2">
            {children}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center gap-6 md:gap-4">
          <h6 className="text-preset-4 text-white">Welcome!</h6>
          <p className="text-preset-7 font-normal text-white">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      )}
    </motion.div>
  );
}
