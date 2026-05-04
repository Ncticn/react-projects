"use client";

// NextJS
import Image from "next/image";

// Icons
import Eating from "@/src/assets/icons/icon-eating.svg";
import Exercise from "@/src/assets/icons/icon-exercise.svg";
import Sleep from "@/src/assets/icons/icon-sleep.svg";
import { motion } from "motion/react";

export default function SectionTips() {
    const tips = [
        {
            image: Eating,
            title: "Healthy eating",
            description: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        },
        {
            image: Exercise,
            title: "Regular exercise",
            description: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        },
        {
            image: Sleep,
            title: "Adequate sleep",
            description: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        }
    ];

    return (
        <section aria-label="Section Tips" className="py-12 px-6 md:py-12.5 md:px-10 lg:py-24 lg:px-32 relative overflow-hidden bg-abcdef/0">
            <div className="max-w-290 mx-auto relative z-20">
                <div className="grid md:grid-cols-1 lg:grid-cols-[repeat(3,365px)] lg:grid-rows-1 gap-10 lg:gap-8">
                    {tips.map((tip, index) => <CardTip key={index} title={tip.title} description={tip.description} image={tip.image} />)}
                </div>
            </div>
            <div className="absolute inset-0 z-10 m-2.5 rounded-[35px] opacity-25 bg-linear-to-r from-0% from-transparent to-100% to-[#D6E6FE]"></div>
        </section>
    );
}



function CardTip({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{delay: .5, type:"spring", bounce: 0.2, visualDuration: .5}}
            className="card-tip flex flex-col md:not-lg:flex-row items-start md:not-lg:items-center justify-start gap-8 md:gap-10 lg:gap-12 col-span-1">
            <div className="card-image inline-block max-w-fit w-full">
                <Image src={image} alt="" loading="eager" />
            </div>

            <div className="card-description space-y-6">
                <h3 className="text-preset-4 text-blue-900">{title}</h3>
                <p className="text-preset-6 font-normal text-grey-500">{description}</p>
            </div>
        </motion.div>
    );
}