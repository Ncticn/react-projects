interface BalanceInfo {
  currency: "$" | "€" | "£";
  totalBalance: number;
}

export default function BalanceInfo(props: BalanceInfo) {
  return (
    <div className="card-balance">
      <div className="rounded-[20px] bg-red-500 px-8 py-6">
        <div className="flex flex-row items-center justify-between">
          <div className="space-y-2">
            <p className="text-preset-4 font-normal text-white">My balance</p>
            <p className="text-preset-2 text-white">
              {props.currency}
              {props.totalBalance}
            </p>
          </div>
          <div>
            <img src="/logo.svg" alt="Brand Logo" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
