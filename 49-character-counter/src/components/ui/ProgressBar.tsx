
function ProgressBar({ value, totalValue }: { value: number, totalValue: number }) {

    const result = ((value / totalValue) * 100);

    return (
        <div className="item-progressbar w-full">
            <div
                className="w-full h-3 overflow-hidden dark:bg-neutral-800 rounded-full bg-neutral-200 ">
                <div className="h-full bg-purple-400 transition-all delay-300 ease-linear rounded-full" style={{
                    width: `${result}%`
                }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;