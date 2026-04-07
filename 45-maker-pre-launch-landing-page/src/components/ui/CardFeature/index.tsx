// Next.JS
import Image from "next/image";

// Component Style
import styles from "@/components/ui/CardFeature/CardFeature.module.css";

interface CardFeatureProps {
  title: string;
  description: string;
  img: {
    component: HTMLImageElement;
    name: string;
  };
  classList?: string;
}

function CardFeature({ title, description, img, classList }: CardFeatureProps) {
  return (
    <article aria-label="Article Card Feature" className={classList}>
      <div className={styles.cardFeatureWrapper}>
        <div className={styles.cardFeatureImageWrapper}>
          <Image
            src={img.component}
            alt={"Image " + img.name}
            className={styles.cardFeatureImg}
          />
        </div>
        <div className={styles.cardFeatureTextWrapper}>
          <h3 className={styles.cardFeatureTitle + " text-preset-4"}>
            {title}
          </h3>
          <p className={styles.cardFeatureDescription + " text-preset-5"}>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CardFeature;
