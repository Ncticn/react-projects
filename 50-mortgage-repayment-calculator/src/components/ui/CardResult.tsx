export default function CardResult() {
    return (
        <div className="px-8 py-8 border-t-4 border-lime bg-black/25 rounded-lg">
            <div className="flex flex-col items-start justify-start gap-8">
                <div className="space-y-2">
                    <p className="text-preset-4 text-slate-300">Your monthly repayments</p>
                    <p className="text-preset-1 text-lime">£1,797.74</p>
                </div>
                <Divider />
                <div className="space-y-2">
                    <p className="text-preset-4 text-slate-300">Total you'll repay over the term</p>
                    <p className="text-preset-2 text-white">£539,322.94</p>
                </div>
            </div>
        </div>
    );
}


function Divider() {
    return (
        <div className="h-px w-full block bg-slate-300/25"></div>
    );
}