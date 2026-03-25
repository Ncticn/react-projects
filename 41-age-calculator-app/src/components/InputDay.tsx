export default function InputDay(){
    return(
        <div className="form-input-item max-w-40 flex flex-col items-start justify-start gap-2">
            <label htmlFor="input-date" className="text-preset-5 font-bold tracking-5px text-grey-500 uppercase">DAY</label>
            <input type="text" name="input-date-day" id="input-date" className="px-6 py-1.75 rounded-lg border border-grey-200 w-full text-preset-3 text-black"/>
        </div>
    );
}