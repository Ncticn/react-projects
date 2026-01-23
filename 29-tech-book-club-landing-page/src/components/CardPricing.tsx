import ButtonBase from "./ButtonBase";
import ItemList from "./ItemList";

interface CardPricingProps {
  title: string;
  pricing: {
    price: string;
    period?: string;
  };
  featuresList: string[];
  buttonProperties: {
    ariaLabel: string;
    text: string;
  };
  primary?: boolean;
}

function CardPricing({
  title,
  pricing,
  featuresList,
  buttonProperties,
  primary = false,
}: CardPricingProps) {
  return (
    <article aria-label="Card Pricing">
      <div
        className={`w-full min-w-85 rounded-lg border border-neutral-200 px-6 ${primary ? "relative overflow-hidden bg-neutral-100 py-6 after:absolute after:top-10 after:-right-80 after:z-10 after:size-171 after:bg-[url(../patterns/pattern-glow.svg)] after:bg-cover after:bg-center after:bg-no-repeat lg:min-w-87.5 lg:py-10" : "bg-white py-6 lg:min-w-71.5"}`}
      >
        <div className="relative z-20 flex flex-col items-start justify-center gap-8">
          <div className="card-pricing-details w-full space-y-6">
            <h3 className="card-pricing-title text-preset-4 text-neutral-900">
              {title}
            </h3>
            <div className="flex flex-row items-center justify-start gap-2">
              <span className="text-preset-3 text-neutral-900">
                {pricing.price}
              </span>
              {pricing.period && (
                <span className="text-preset-5 text-neutral-700">
                  {pricing.period}
                </span>
              )}
            </div>
            <div className="block h-0.5 w-full bg-neutral-200"></div>

            <ItemList listSpace="16" listItems={featuresList} />
          </div>
          <ButtonBase
            text={buttonProperties.text}
            ariaLabel={buttonProperties.ariaLabel}
          />
        </div>
      </div>
    </article>
  );
}
export default CardPricing;
