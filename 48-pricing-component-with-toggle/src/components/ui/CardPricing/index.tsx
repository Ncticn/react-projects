"use client";

// React
import { ReactNode } from "react";

// Components
import ButtonLink from "../ButtonLink";
import Divider from "../Divider";

// Component Styles
import styles from "@/components/ui/CardPricing/CardPricing.module.css";


interface CardPricingProps {
    highlighted?: boolean;
    title: string;
    currency: "$" | "€",
    price: string;
    featuresList: string[];
}

export default function CardPricing({ highlighted = false, title, currency, price, featuresList }: CardPricingProps) {
    return (
        <article aria-label="Card-Pricing" className={`${styles.card_pricing} ${highlighted ? "group highlighted bg-linear-to-r! from-0%! from-[#A2A7F0]! to-100%! to-[#696EDD]!" : ""}`}>
            <header>
                <h3 className={styles.card_pricing_title + " text-preset-4 group-[.highlighted]:text-white!"}>{title}</h3>
            </header>
            <main className="space-y-6">
                <div className="flex flex-row items-center justify-center gap-2">
                    <span className="text-preset-2 text-gray-700 group-[.highlighted]:text-white!">{currency}</span>
                    <p className="text-preset-1 text-gray-700 group-[.highlighted]:text-white!">
                        {price}
                    </p>
                </div>
                <PricingList featuresList={featuresList} />
            </main>
            <footer>
                <ButtonLink type={highlighted ? "primary" : "secondary"} text="LEARN MORE" />
            </footer>
        </article>
    );
}

function PricingList({ featuresList }: { featuresList: string[] }) {
    return (
        <ul className={styles.card_pricing_features_list}>
            {
                featuresList.map((item, index) =>
                    <PricingListItem key={index}>
                        <p className={styles.card_pricing_features_list_item_text + " text-preset-5 group-[.highlighted]:text-white!"} >{item}</p>
                    </PricingListItem>
                )
            }
            <Divider />
        </ul>
    );
}

function PricingListItem({ children }: { children: ReactNode }) {
    return (
        <>
            <Divider />
            <li className={styles.card_pricing_features_list_item}>
                {children}
            </li>
        </>
    );
}