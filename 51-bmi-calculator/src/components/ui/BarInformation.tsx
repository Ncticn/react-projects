import { ReactNode } from "react";

interface BarInformationProps {
    bmi?: number;
    children?: ReactNode
}

export default function BarInformation({ bmi, children }: BarInformationProps) {
    return (
        <div className="bg-blue-500 px-8 py-8 rounded-l-2xl rounded-r-2xl md:rounded-r-[100px] w-full h-full overflow-hidden relative">
            {
                bmi && children ?
                    <div className="flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between gap-6 md:gap-0">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <h6 className="text-preset-6 font-semibold text-white">
                                Your BMI is...
                            </h6>
                            <p className="text-preset-1 text-white">23.4</p>
                        </div>
                        <p className="text-preset-7 font-normal text-white text-start text-pretty md:max-w-1/2">
                            {children}
                        </p>
                    </div>
                    :
                    <div className="flex flex-col items-start justify-center gap-6 md:gap-4">
                        <h6 className="text-preset-4 text-white">Welcome!</h6>
                        <p className="text-preset-7 font-normal text-white">Enter your height and weight and you’ll see your BMI result here</p>
                    </div>
            }
        </div>
    );
}