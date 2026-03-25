export default function InputDay() {
  return (
    <div className="form-input-item flex flex-col items-start justify-start gap-2">
      <label
        htmlFor="input-date"
        className="text-preset-5 tracking-5px text-grey-500 font-bold uppercase"
      >
        DAY
      </label>
      <input
        type="text"
        name="input-date-day"
        id="input-date"
        className="border-grey-200 text-preset-3 w-full rounded-lg border px-4 py-1.75 text-black md:px-6"
      />
    </div>
  );
}
