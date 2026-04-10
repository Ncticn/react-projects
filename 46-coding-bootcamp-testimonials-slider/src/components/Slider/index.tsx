"use client";

// React
import { useState } from "react";

// NextJS
import Image from "next/image";

// Motion
import { motion } from "motion/react"

// Component Styles
import styles from "@/components/Slider/Slider.module.css";

// Patterns
import PatternQuotes from "@/assets/patterns/pattern-quotes.svg";

// Icons
import IconNext from "@/assets/icons/icon-next.svg";
import IconPrev from "@/assets/icons/icon-prev.svg";

type SlideList = {
  id: number;
  author: string;
  job?: string;
  comment: string;
  img: string;
};

interface SliderProps {
  slideList: SlideList[];
}

export default function Slider({ slideList }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slideList[activeIndex];

  function handleSliderClick(type: "next" | "prev") {
    if (type === "next") {
      setActiveIndex((prev) => (prev + 1) % slideList.length);
    } else {
      setActiveIndex((prev) => (prev === 0 ? slideList.length - 1 : prev - 1));
    }
  }

  if (!activeSlide) return null;

  return (
    <div className={styles.slider_container}>
      <div className={styles.slider_wrapper} key={activeIndex}>
        <div className={styles.slider_img_wrapper}>
          <SliderImage img={activeSlide.img} author={activeSlide.author} />
          <SliderControls onClick={handleSliderClick} />
        </div>

        <div className={styles.slider_content_wrapper}>
          <SliderContent
            author={activeSlide.author}
            job={activeSlide.job}
            comment={activeSlide.comment}
          />
        </div>
      </div>
    </div>
  );
}

function SliderContent({
  author,
  comment,
  job,
}: {
  author: string;
  comment: string;
  job?: string;
}) {
  return (
    <>
      <div className={styles.slider_content_img_wrapper}>
        <Image src={PatternQuotes} alt="" />
      </div>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }} className={styles.slider_content_author}>
        <p
          className={`text-preset-1 text-blue-950 ${styles.slider_content_author_comment}`}
        >
          “ {comment} ”
        </p>
        <div className={styles.slider_content_author_info}>
          <span className="text-preset-2 font-bold text-blue-950">
            {author}
          </span>
          <span className="text-preset-2 text-gray-400">{job}</span>
        </div>
      </motion.div>
    </>
  );
}

function SliderImage({ img, author }: { img: string; author: string }) {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }} className={styles.slider_image_wrapper}>
      <img
        src={img}
        alt={`Image ${author}`}
        width={540}
        height={540}
        className="drop-shadow-[0px_40px_50px_rgba(36,36,113,50%)]"
      />
    </motion.div>
  );
}

function SliderControls({
  onClick,
}: {
  onClick: (type: "next" | "prev") => void;
}) {
  return (
    <div className={styles.slider_controls_wrapper}>
      <button
        type="button"
        aria-label="Next Slide"
        className={`${styles.slider_controls_btn} rounded-s-[28px]!`}
        onClick={() => onClick("next")}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            onClick("next");
          }
        }}
      >
        <Image
          src={IconPrev}
          alt=""
          className="h-2.75 w-1.5 object-contain md:h-auto md:w-fit"
        />
      </button>
      <button
        type="button"
        aria-label="Previous Slide"
        className={`${styles.slider_controls_btn} rounded-e-[28px]!`}
        onClick={() => onClick("prev")}
      >
        <Image
          src={IconNext}
          alt=""
          className="h-2.75 w-1.5 object-contain md:h-auto md:w-fit"
        />
      </button>
    </div>
  );
}
