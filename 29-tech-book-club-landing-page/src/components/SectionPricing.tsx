import CardPricing from "./CardPricing";

function SectionPricing() {
  return (
    <section aria-label="Section Pricing">
      <div className="px-4 md:px-8 lg:px-0">
        <div className="mx-auto max-w-full lg:max-w-242.5">
          <div className="flex flex-col items-start justify-start gap-6 md:gap-10 lg:items-center lg:gap-16">
            <h2 className="text-preset-2 text-neutral-900">
              Membership options
            </h2>
            <div className="pricing-options-wrapper flex w-full flex-row flex-wrap items-center justify-start gap-6 lg:justify-center">
              <CardPricing
                title="Starter"
                pricing={{ price: "$19", period: "/month" }}
                featuresList={["1 book/month", "Online forums"]}
                buttonProperties={{
                  text: "SUBSCRIBE NOW",
                  ariaLabel: "Subscribe Now To",
                }}
              />
              <CardPricing
                primary
                title="Pro"
                pricing={{
                  price: "$29",
                  period: "/month",
                }}
                featuresList={["2 books/month", "Virtual meetups"]}
                buttonProperties={{
                  text: "SUBSCRIBE NOW",
                  ariaLabel: "Subscribe Now",
                }}
              />
              <CardPricing
                title="Enterprise"
                pricing={{
                  price: "Custom",
                }}
                featuresList={["Team access", "Private sessions"]}
                buttonProperties={{
                  text: "TALK TO US",
                  ariaLabel: "Talk to us",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionPricing;
