"use client";

// React
import { useEffect, useState } from "react";

// Components
import ButtonSubmit from "@/components/ButtonSubmit";
import InputRange from "@/components/InputRange";
import ListItem from "@/components/ListItem";
import Divider from "@/components/Divider/page";
import Tag from "@/components/Tag";

// Utils
import formatYaerlyPrice from "@/utils/FormatYaerlyPrice";

// Data
import Views from "@/data/data.json";

export default function Home() {
  const pageViews = Views;

  const [selectedId, setSelectedId] = useState<number>(3);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [price, setPrice] = useState<number>(16);
  const [view, setView] = useState<number>(100);

  function calculatedView(id: number) {
    let selectedView = pageViews.find((view) => view.id === id);
    if (!selectedView) {
      selectedView = pageViews[id - 1];
    }

    if (billing === "yearly") {
      setPrice(formatYaerlyPrice(selectedView.price));
    } else {
      setPrice(selectedView.price);
    }

    setView(selectedView.views);
  }

  function handleInputRange(value: string) {
    setSelectedId(Number(value));
    calculatedView(Number(value));
  }

  function toggleClick() {
    if (billing === "monthly") {
      setBilling("yearly");
    } else {
      setBilling("monthly");
    }
  }

  useEffect(() => {
    calculatedView(selectedId);
  }, [billing]);

  return (
    <section className="w-full space-y-14">
      <div className="relative mx-auto flex h-36.5 max-w-81.75 flex-col items-center justify-center overflow-hidden text-center before:absolute before:z-10 before:h-36.5 before:w-full before:bg-[url('src/assets/patterns/pattern-circles.svg')] before:bg-contain before:bg-center before:bg-no-repeat before:object-center md:max-w-98.75">
        <div className="z-20 space-y-3">
          <h1 className="text-xl font-extrabold tracking-normal text-[#293356] md:text-[28px]">
            Simple, traffic-based pricing
          </h1>
          <p className="text-[13px] font-semibold tracking-normal text-[#848EAD] not-md:mx-auto not-md:max-w-[55%] md:text-[15px]">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
      </div>

      <div className="card-pricing mx-auto max-w-81.75 rounded-lg bg-white py-8 drop-shadow-[0px_20px_30px_rgba(127,137,185,15%)] md:min-w-135">
        <div className="hidden items-center md:flex md:flex-col md:items-stretch md:justify-center md:gap-10">
          <div className="flex w-full flex-row items-center justify-between gap-0 px-12">
            <span className="text-[14px] font-extrabold tracking-[2px] text-[#848EAD]">
              {pageViews[selectedId - 1].preview} PAGEVIEWS
            </span>

            <div className="flex flex-row items-center justify-center gap-2">
              <span className="text-[40px] font-extrabold -tracking-[1px] text-[#293356]">
                ${price}.00
              </span>
              <span className="text-base font-semibold tracking-normal text-[#848EAD]">
                / {billing === "monthly" ? "month" : "year"}
              </span>
            </div>
          </div>

          <div className="w-full px-12">
            <InputRange
              inputID="input-range"
              inputName="input-pageviews"
              onChange={handleInputRange}
            />
          </div>

          <div className="relative space-x-2 px-12 text-center">
            <div className="inline-flex flex-row items-stretch justify-center gap-4">
              <span className="text-[12px] font-semibold tracking-normal text-[#848EAD]">
                Monthly Billing
              </span>
              <div>
                <input type="checkbox" value={billing} className="hidden" />

                <button
                  className={`h-5.5 w-10.75 ${billing === "yearly" ? "bg-[#7AEADF]" : "bg-[#CFD8EF]"} relative cursor-pointer overflow-hidden rounded-2xl transition-all delay-75 ease-linear`}
                  onClick={() => toggleClick()}
                >
                  <div
                    className={`absolute inset-y-0 m-1 size-3.5 rounded-full bg-white transition-transform delay-75 ease-linear ${billing === "yearly" ? "translate-x-5" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
              <span className="text-[12px] font-semibold tracking-normal text-[#848EAD]">
                Yearly Billing
              </span>
            </div>
            <div className="absolute inset-y-0 right-16">
              <Tag text="25%" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:hidden">
          <span className="text-[12px] font-extrabold tracking-[1.7px] text-[#848EAD] md:text-[14px] md:tracking-[2px]">
            {pageViews[selectedId - 1].preview} PAGEVIEWS
          </span>
          <div className="w-full px-6">
            <InputRange
              inputID="input-range"
              inputName="input-pageviews"
              onChange={handleInputRange}
            />
          </div>

          <div className="flex flex-row items-center justify-center gap-2.5">
            <span className="text-[32px] font-extrabold -tracking-[.8px] text-[#293356]">
              ${price}.00
            </span>
            <span className="text-[14px] font-semibold tracking-normal text-[#848EAD]">
              / {billing === "monthly" ? "month" : "year"}
            </span>
          </div>

          <div className="relative w-full space-x-2 text-center">
            <div className="inline-flex flex-row items-stretch justify-center gap-4">
              <span className="text-[12px] font-semibold tracking-normal text-[#848EAD]">
                Monthly Billing
              </span>
              <div>
                <input type="checkbox" value={billing} className="hidden" />

                <button
                  className={`h-5.5 w-10.75 ${billing === "yearly" ? "bg-[#7AEADF]" : "bg-[#CFD8EF]"} relative cursor-pointer overflow-hidden rounded-2xl transition-all delay-75 ease-linear`}
                  onClick={() => toggleClick()}
                >
                  <div
                    className={`absolute inset-y-0 m-1 size-3.5 rounded-full bg-white transition-transform delay-75 ease-linear ${billing === "yearly" ? "translate-x-5" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
              <span className="text-[12px] font-semibold tracking-normal text-[#848EAD]">
                Yearly Billing
              </span>
            </div>
            <div className="absolute inset-y-0 right-[2.75%]">
              <Tag text="25%" />
            </div>
          </div>
        </div>

        <Divider />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0 md:px-12">
          <ul className="flex flex-col items-center justify-start gap-2.5 md:items-start">
            <ListItem text="Unlimited websites" />
            <ListItem text="100% data ownership" />
            <ListItem text="Email reports" />
          </ul>

          <ButtonSubmit text="Start my trial" />
        </div>
      </div>
    </section>
  );
}
