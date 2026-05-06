"use client";

// NextJS
import Image from "next/image";

// Images
import ImageManEating from "../../assets/images/image-man-eating.webp";
import PatternCurvedLineLeft from "@/src/assets/patterns/pattern-curved-line-left.svg";
import { motion } from "motion/react";

export default function SectionAbout() {
  return (
    <section
      aria-label="Section About"
      className="relative overflow-hidden lg:pb-36"
    >
      <div className="mx-auto max-w-full md:max-w-290 not-lg:md:-translate-x-20">
        <div className="flex flex-col items-end justify-between gap-12 md:flex-row md:gap-18 lg:relative lg:overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.75, stiffness: 25 }}
            className="min-w-full shrink md:min-w-108.75 lg:min-w-141"
          >
            <Image
              src={ImageManEating}
              alt="Image Man Eating"
              loading="eager"
              placeholder="blur"
            />
          </motion.div>

          <div className="hidden lg:absolute lg:top-0 lg:right-6 lg:inline-block">
            <Image src={PatternCurvedLineLeft} alt="" loading="eager" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.75, type: "spring" }}
            className="flex-none space-y-8 px-6 pb-8 md:w-82.75 md:px-0 lg:w-116.25"
          >
            <h2 className="text-preset-2 text-blue-900">
              What your BMI result means
            </h2>
            <p className="text-grey-500 text-preset-6 text-start font-normal text-pretty">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
