"use client";

// React
import { useState } from "react";

// Data
import priceList from "@/data/data.json";

// Components
import CardPricing from "@/components/ui/CardPricing";
import Toggle from "@/components/ui/Toggle";


export default function Home() {
  const [paymentMethod, setPaymentMethod] = useState("monthly");
  const handleToggle = (value:string) => setPaymentMethod(value);

  return (
    <section className="relative lg:h-screen overflow-x-hidden">
      <div className="relative z-20 h-full">
        <div className="mx-auto max-w-81.75 md:max-w-152 lg:max-w-262.5 h-full">
          <div className="flex flex-col items-stretch lg:items-center h-full justify-center gap-16">
            <div className="section-header space-y-10 text-center">
              <h1 className="text-preset-3 text-gray-650">Our Pricing</h1>
              <Toggle currentlySelected={handleToggle} />
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-[repeat(3,350px)] items-stretch justify-center gap-8 lg:gap-0 z-20 relative">
              {
                priceList.map((price, index) => <div key={index} className="col-span-1 first:lg:my-6 first:lg:ms-6 last:lg:my-6 last:lg:me-6 even:lg:*:h-full">
                  <CardPricing
                    title={price.campaign}
                    highlighted={price.highlighted}
                    currency="$"
                    price={paymentMethod === "annually" ? price.annually : price.monthly}
                    featuresList={price.features}
                  />
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}