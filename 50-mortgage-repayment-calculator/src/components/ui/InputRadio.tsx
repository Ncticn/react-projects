"use client";

interface InputRadioProps {
  inputId: string;
  inputName: string;
  text: string;
  value: string;
  selected: string;
  setSelected: (value: string) => void;
}

export default function InputRadio({
  inputId,
  inputName,
  text,
  value,
  selected,
  setSelected,
}: InputRadioProps) {
  const isChecked = selected === value;

  return (
    <div className="form-item">
      <input
        type="radio"
        name={inputName}
        id={inputId}
        value={value}
        checked={isChecked}
        onChange={() => setSelected(value)}
        className="sr-only"
      />

      <label
        className={`hover:border-lime flex w-full cursor-pointer flex-row gap-4 rounded-sm border-2 px-4 py-3 transition delay-150 ease-linear ${isChecked ? "bg-lime/15 border-lime" : "border-slate-500 bg-transparent"}`}
        htmlFor={inputId}
      >
        <div
          className={`flex size-6 items-center justify-center overflow-hidden rounded-full border-2 p-0.75 transition delay-150 ease-linear ${isChecked ? "border-lime" : "border-slate-700"}`}
        >
          {isChecked && (
            <span className="bg-lime inline-block h-full w-full rounded-full"></span>
          )}
        </div>
        <span className="text-preset-3 inline-block text-slate-900">
          {text}
        </span>
      </label>
    </div>
  );
}
