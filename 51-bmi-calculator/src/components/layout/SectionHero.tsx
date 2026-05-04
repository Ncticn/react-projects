"use client";

import { motion } from "motion/react";

import CardBodyMassIndexCalculator from "../ui/CardBodyMassIndexCalculator";

export default function SectionHero() {
    return (
        <section aria-label="Section Hero" className="relative z-20">
            <div className="lg:max-w-290 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[repeat(2,564px)] items-center justify-center gap-10 lg:gap-8">
                    <div className="lg:max-w-116 space-y-8 text-center lg:text-start">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{delay: .75}}
                            className="text-preset-1 text-blue-900 text-balance">Body Mass <br></br> Index Calculator</motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{delay: .75}}
                            className="text-preset-6 font-normal text-grey-500">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</motion.p>
                    </div>
                    <CardBodyMassIndexCalculator />
                </div>
            </div>
        </section>
    );
}