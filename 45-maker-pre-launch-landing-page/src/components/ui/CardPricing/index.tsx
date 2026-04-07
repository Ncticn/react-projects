// Next.JS
import Image from "next/image";

// Component Style
import styles from "@/components/ui/CardPricing/CardPricing.module.css";

interface CardPricingProps {
  title: string;
  description: string;
  img: HTMLImageElement;
  featuresList: FeaturesList[];
  price?: string;
}

type FeaturesList = {
  id: number;
  text: string;
};

function CardPricing({
  title,
  description,
  img,
  featuresList,
  price,
}: CardPricingProps) {
  return (
    <article aria-label="Article Card Pricing">
      <div
        className={
          styles.cardPricing +
          (price !== undefined ? " bg-cyan-400 lg:scale-105" : " bg-blue-800")
        }
      >
        <div className={styles.cardPricingWrapper}>
          <header
            className={
              styles.cardPricingHeader +
              (price !== undefined ? " text-neutral-900" : " text-white")
            }
          >
            <h3 className="text-preset-4">{title}</h3>
            <p className="text-preset-5 opacity-60">{description}</p>
          </header>

          {price ? (
            <div className="flex flex-row items-center justify-start gap-2">
              <span className="text-preset-2 text-neutral-900">${price}</span>
              <span className="text-preset-5 text-neutral-900/60">/ month</span>
            </div>
          ) : (
            <span className="text-preset-2 text-neutral-0">Free</span>
          )}

          <ul
            className={
              styles.cardPricingList +
              (price !== undefined ? " text-neutral-900" : " text-white")
            }
          >
            {featuresList.map((item) => (
              <CardPricingListItem
                key={item.id}
                text={item.text}
                type={price !== undefined ? "netural" : "cyan"}
              />
            ))}
          </ul>
        </div>
        <div
          className={"absolute" + (price !== undefined ? " -top-8" : " -top-6")}
        >
          <Image src={img} alt="" />
        </div>
      </div>
    </article>
  );
}

function CardPricingListItem({
  text,
  type,
}: {
  text: string;
  type: "cyan" | "netural";
}) {
  return (
    <li className={styles.cardPricingListItem + " text-preset-5"}>
      <span className={type === "cyan" ? "text-cyan-400" : "text-blue-800"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          fill="currentColor"
        >
          <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
        </svg>
      </span>
      {text}
    </li>
  );
}

export default CardPricing;
