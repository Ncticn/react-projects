interface CardResultProps {
  monthlyRepayments: string;
  totalRepay?: string;
}
export default function CardResult({
  monthlyRepayments,
  totalRepay,
}: CardResultProps) {
  return (
    <div className="border-lime rounded-lg border-t-4 bg-black/25 px-8 py-8">
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="space-y-2">
          <p className="text-preset-4 text-slate-300">
            Your monthly repayments
          </p>
          <p className="text-preset-1 text-lime">£{monthlyRepayments}</p>
        </div>
        <Divider />
        {totalRepay && (
          <div className="space-y-2">
            <p className="text-preset-4 text-slate-300">
              Total you'll repay over the term
            </p>
            <p className="text-preset-2 text-white">£{totalRepay}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="block h-px w-full bg-slate-300/25"></div>;
}
