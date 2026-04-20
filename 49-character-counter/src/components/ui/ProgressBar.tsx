
function ProgressBar({ value }: { value: number }) {

    return (
        <div className="item-progressbar w-full">
            <div
                className="w-full h-3 overflow-hidden dark:bg-neutral-800 rounded-full bg-neutral-100 ">
                <div className="h-full bg-purple-400 transition-all delay-300 ease-linear rounded-full" style={{
                    width: `${value}%`
                }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;