interface ChartBarProps {
  title: string;
  value: number;
  isBiggest?: boolean;
}

const HEIGHT_MULTIPLIER = 2.86;

export default function ChartBar({ title, value, isBiggest }: ChartBarProps) {
  const barBackgroundColor = isBiggest
    ? "bg-blue-300 hover:bg-blue-200"
    : "bg-red-500 hover:bg-red-300";

  return (
    <div aria-label="Chart Bar">
      <div className="relative flex w-fit flex-col items-stretch gap-2 text-center">
        <div
          className={`group w-8.5 cursor-pointer rounded-[5px] transition-all delay-75 ease-linear md:w-12.5 ${barBackgroundColor}`}
          style={{ height: value * HEIGHT_MULTIPLIER }}
        >
          <div className="bg-brown-950 absolute -top-12 -left-2.5 flex h-10 w-fit items-center justify-center rounded-[5px] p-2 opacity-0 transition-opacity delay-75 ease-linear group-hover:opacity-100">
            <span className="text-preset-4 font-bold text-white">${value}</span>
          </div>
        </div>
        <span className="text-preset-5 text-brown-400 font-normal">
          {title}
        </span>
      </div>
    </div>
  );
}
