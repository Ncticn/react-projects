"use client";

// React
import { useState } from "react";

// NextJS
import Image from "next/image";

// Images
import IllustrationEmpty from "@/assets/images/illustration-empty.svg"

// Components
import FormMortgageCalculator from "@/components/ui/FormMortgageCalculator";
import CardResult from "@/components/ui/CardResult";

// Utils
import utilNumberToFormatCurrency from "@/utils/utilNumberToFormatCurrency";


export default function SectionMortgageCalculator() {
    const [repayment, setRepayment] = useState("");
    const [totalRepayment, setTotalRepayment] = useState("");

    const handleFormSubmit = (repayment?: number, totalRepay?: number) => {
        if (repayment) {
            setRepayment(utilNumberToFormatCurrency(Number(repayment?.toFixed(2)), "en-US"));
            if (totalRepay) {
                setTotalRepayment(utilNumberToFormatCurrency(Number(totalRepay?.toFixed(2)), "en-US"));
            } else {
                setTotalRepayment("");
            }
        } else {
            setRepayment("");
        }
    }

    return (
        <section aria-label="Section Mortgage Calculator" className="relative overflow-hidden bg-white md:rounded-bl-[80px]! md:rounded-3xl lg:rounded-3xl! drop-shadow-[0_32px_64px_rgba(19,45,65,10%)]">
            <div className="grid md:grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1">

                <FormMortgageCalculator calculatedResult={handleFormSubmit} />

                {
                    repayment ?
                        <div className="col-span-1 bg-slate-900 px-6 py-8 md:px-10 md:py-10 md:rounded-bl-[80px] *:h-full">
                            <div className="flex flex-col items-stretch justify-start gap-6 md:gap-10">
                                <div className="space-y-4">
                                    <h2 className="text-preset-2 text-white">Your results</h2>
                                    <p className="text-preset-4 text-slate-300">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                                </div>
                                <CardResult monthlyRepayments={repayment} totalRepay={totalRepayment} />
                            </div>
                        </div>
                        :
                        <div className="bg-slate-900 px-6 md:px-10 py-8 md:py-10 md:rounded-bl-[80px] *:h-full">
                            <div className="flex flex-col items-center justify-center gap-4 text-center">
                                <Image src={IllustrationEmpty} alt="Image Illustration Empty" loading="eager" />
                                <h2 className="text-preset-2 text-white">Results shown here</h2>
                                <p className="text-preset-4 text-slate-300">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
}