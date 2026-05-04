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
      description:
        "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      image: Exercise,
      title: "Regular exercise",
      description:
        "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      image: Sleep,
      title: "Adequate sleep",
      description:
        "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];

  return (
    <section
      aria-label="Section Tips"
      className="bg-abcdef/0 relative overflow-hidden px-6 py-12 md:px-10 md:py-12.5 lg:px-32 lg:py-24"
    >
      <div className="relative z-20 mx-auto max-w-290">
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-[repeat(3,365px)] lg:grid-rows-1 lg:gap-8">
          {tips.map((tip, index) => (
            <CardTip
              key={index}
              title={tip.title}
              description={tip.description}
              image={tip.image}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-10 m-2.5 rounded-[35px] bg-linear-to-r from-transparent from-0% to-[#D6E6FE] to-100% opacity-25"></div>
    </section>
  );
}

function CardTip({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        type: "spring",
        bounce: 0.2,
        visualDuration: 0.5,
      }}
      className="card-tip col-span-1 flex flex-col items-start justify-start gap-8 md:gap-10 md:not-lg:flex-row md:not-lg:items-center lg:gap-12"
    >
      <div className="card-image inline-block w-full max-w-fit">
        <Image src={image} alt="" loading="eager" />
      </div>

      <div className="card-description space-y-6">
        <h3 className="text-preset-4 text-blue-900">{title}</h3>
        <p className="text-preset-6 text-grey-500 font-normal">{description}</p>
      </div>
    </motion.div>
  );
}
