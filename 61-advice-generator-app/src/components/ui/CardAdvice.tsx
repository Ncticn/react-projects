"use client";

// React
import { useEffect, useState } from "react";

// Components
import ButtonDice from "./ButtonDice";
import Divider from "./Divider";

// Services
import getAdvice from "@/src/services/getAdvice";

type Advice = {
  id: number;
  advice: string;
};

export default function CardAdvice() {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchAdvice() {
    try {
      setLoading(true);
      const data = await getAdvice();
      setAdvice(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div aria-label="Card Advice" className="card-advice">
      <div className="h-fit w-full rounded-[10px] bg-blue-900 drop-shadow-[30px_50px_80px_rgba(0,0,0,%10)] not-md:px-6 not-md:py-10 md:w-135 md:rounded-[15px] md:p-12">
        <div className="justify-cente flex flex-col items-stretch gap-8 md:gap-10">
          {loading ? (
            <h1 className="text-preset-1 animate-pulse text-center text-green-300">
              Loading...
            </h1>
          ) : (
            <div className="space-y-4 text-center md:space-y-6">
              <h1 className="card-advice-title text-preset-3 text-green-300 uppercase">
                ADVICE #{advice?.id}
              </h1>
              <p className="card-advice-description text-preset-1 text-blue-200">
                “{advice?.advice}”
              </p>
            </div>
          )}

          <div className={loading ? "animate-pulse" : "" + "w-full"}>
            <Divider />
          </div>

          <div className="relative text-center">
            <div className="absolute -bottom-20 w-full">
              <ButtonDice
                classList={
                  loading ? "animate-[spin_1250ms_linear_infinite]" : ""
                }
                onClick={fetchAdvice}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
