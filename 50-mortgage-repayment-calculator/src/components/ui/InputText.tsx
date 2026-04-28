"use client";

interface InputTextProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: string) => void;
  addon: string;
  addonPosition: "prefix" | "suffix";
  error?: string;
}

export default function InputText({
  id,
  name,
  label,
  value,
  onChange,
  addon,
  addonPosition,
  error,
}: InputTextProps) {
  const handleOnChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="flex flex-col items-stretch justify-start gap-3">
      <label htmlFor={id} className="text-preset-4 text-slate-700">
        {label}
      </label>
      <div
        className={`group focus-within:border-lime relative flex h-fit items-stretch justify-start gap-0 overflow-hidden rounded-sm border-2 transition delay-150 ease-linear *:h-full hover:border-slate-900 ${error ? "border-red" : "border-slate-500"} ${addonPosition === "prefix" ? "flex-row" : "flex-row-reverse"}`}
      >
        <div
          className={`text-preset-3 group-focus-within:bg-lime cursor-pointer px-4 py-3 text-center transition delay-150 ease-linear group-focus-within:text-slate-900 ${error ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}
        >
          {addon}
        </div>

        <input
          type="text"
          id={id}
          name={name}
          className="text-preset-3 w-full px-4 py-3 text-slate-900 outline-0"
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
        />
      </div>
      {error && <span className="text-preset-5 text-red">{error}</span>}
    </div>
  );
}
