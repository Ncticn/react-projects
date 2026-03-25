export default function CounterAge() {
    return (
        <div className="counter-age">
            <div className="counter-age-wrapper flex flex-col items-start justify-start gap-0">
                <CounterAgeItem type="years" value={38}/>
                <CounterAgeItem type="months" value={3}/>
                <CounterAgeItem type="days" value={26}/>
            </div>
        </div>
    );
}


function CounterAgeItem({ type, value }: { type: "years" | "months" | "days"; value: number; }) {
    return (
        <div className="counter-age-years flex flex-row items-start justify-start gap-2">
            <p className="text-preset-1 text-purple-500">{value}</p>
            <p className="text-preset-1 text-black">{type}</p>
        </div>
    );
}