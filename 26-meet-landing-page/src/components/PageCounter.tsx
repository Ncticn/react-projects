type PageCounterProps = {
  count: string;
};

export default function PageCounter({ count }: PageCounterProps) {
  return (
    <div className="page-counter">
      <div className="mx-auto max-w-14">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto inline-block h-20 w-[1.15px] bg-slate-300">
            {" "}
          </div>
          <div className="bg-white-base size-14 rounded-full border border-slate-300">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-preset-5 text-slate-600">{count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
