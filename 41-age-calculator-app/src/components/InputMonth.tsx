export default function InputMonth(){
    return(
        <div className="form-input-item max-w-40 flex flex-col items-start justify-start gap-2">
            <label htmlFor="input-month" className="text-preset-5 font-bold tracking-5px text-grey-500 uppercase">MONTH</label>
            <input type="text" name="input-date-month" id="input-month" className="px-6 py-1.75 rounded-lg border border-grey-200 w-full text-preset-3 text-black"/>
        </div>
    );
}