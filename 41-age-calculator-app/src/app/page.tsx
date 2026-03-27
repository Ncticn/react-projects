"use client";

import { useState } from "react";

import InputDate from "@/components/InputDate";
import InputMonth from "@/components/InputMonth";
import InputYear from "@/components/InputYear";
import ButtonSubmit from "@/components/ButtonSubmit";
import CounterAge from "@/components/CounterAge";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setmonth] = useState("");
  const [year, setYear] = useState("");

  const [d, setD] = useState(0);
  const [m, setM] = useState(0);
  const [y, setY] = useState(0);

  function handleSubmit(e: any) {
    e.preventDefault();

    const d = Number(day);
    const m = Number(month);
    const y = Number(year);

    const birthDate = new Date(y, m - 1, d);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;

      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();

      days += prevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setD(days);
    setM(months);
    setY(years);
  }

  return (
    <section aria-label="Age Counter App">
      <div className="mx-auto max-w-85.75 rounded-t-3xl rounded-tr-3xl rounded-br-[200px] bg-white px-6 py-12 md:max-w-171.5 md:px-14 md:py-14 lg:max-w-210">
        <div className="flex flex-col items-stretch justify-start gap-8 lg:gap-0">
          <form
            className="space-y-8 lg:space-y-0"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="grid w-full grid-cols-3 items-start justify-start gap-4 md:grid-cols-[repeat(3,170px)] md:gap-8 lg:grid-cols-[repeat(3,160px)]">
              <InputDate inputID="input-date" onChange={(d) => setDay(d)} />
              <InputMonth inputID="input-month" onChange={(m) => setmonth(m)} />
              <InputYear inputID="input-year" onChange={(y) => setYear(y)} />
            </div>
            <div className="relative flex w-full flex-row items-center justify-center gap-0 lg:justify-end">
              <div className="divider bg-grey-200 absolute z-0 h-px w-full"></div>
              <ButtonSubmit />
            </div>
          </form>
          <div className="w-full">
            <CounterAge day={d} month={m} year={y} />
          </div>
        </div>
      </div>
    </section>
  );
}
