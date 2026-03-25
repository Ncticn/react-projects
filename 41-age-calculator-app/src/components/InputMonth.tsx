export default function InputMonth() {
  return (
    <div className="form-input-item flex flex-col items-start justify-start gap-2">
      <label
        htmlFor="input-month"
        className="text-preset-5 tracking-5px text-grey-500 font-bold uppercase"
      >
        MONTH
      </label>
      <input
        type="text"
        name="input-date-month"
        id="input-month"
        className="border-grey-200 text-preset-3 w-full rounded-lg border px-6 py-1.75 text-black"
      />
    </div>
  );
}
