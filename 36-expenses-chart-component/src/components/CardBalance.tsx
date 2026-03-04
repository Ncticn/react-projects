// DB
import data from "../data/data.json";

// Components
import BalanceInfo from "./BalanceInfo";
import ChartBar from "./ChartBar";

const TOTAL_BALANCE = 921.48;
const TOTAL_THIS_MONTH = 478.33;
const PERCENT_CHANGE = 2.4;

interface CardBalanceProps {
  currency: "$" | "€" | "£";
}

export default function CardBalance({ currency = "$" }: CardBalanceProps) {
  return (
    <article className="card-expenses-chart">
      <div className="w-full min-w-86 space-y-4 md:max-w-135 md:space-y-6">
        <BalanceInfo currency={currency} totalBalance={TOTAL_BALANCE} />

        <CardSpending />
      </div>
    </article>
  );
}

function CardSpending() {
  const amounts = data.map((item) => item.amount);
  const maxValue = Math.max(...amounts);

  return (
    <div aria-label="Card Spending">
      <div className="rounded-[20px] bg-white px-4 py-6 md:px-10 md:py-8">
        <div className="card-wrapper flex flex-col items-stretch justify-center gap-14 md:gap-16">
          <h1 className="text-preset-2 text-brown-950">
            Spending - Last 7 days
          </h1>

          <div
            className="flex flex-col items-stretch gap-6 md:gap-8"
            aria-label="Chart Spending"
          >
            <div aria-label="Chart Bars">
              <div className="flex flex-row items-end justify-center gap-2 md:gap-4">
                {data.map((item) => (
                  <ChartBar
                    title={item.day}
                    value={item.amount}
                    key={item.day}
                    isBiggest={item.amount === maxValue}
                  />
                ))}
              </div>
            </div>
            <div aria-label="Total Info" className="space-y-6 md:space-y-8">
              <div className="block h-0.5 rounded-[1px] bg-red-100"></div>
              <div aria-label="Total Details">
                <p className="text-brown-400 text-preset-4 font-normal">
                  Total this month
                </p>
                <div
                  className="flex flex-row items-center justify-between"
                  aria-label="Total Amount"
                >
                  <p className="text-preset-1 text-brown-950 w-fit text-start">
                    ${TOTAL_THIS_MONTH}
                  </p>
                  <div className="w-fit text-end" aria-label="Total Change">
                    <p className="text-preset-4 text-brown-950 font-bold">
                      +{PERCENT_CHANGE}%
                    </p>
                    <p className="text-preset-4 text-brown-400 font-normal">
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
