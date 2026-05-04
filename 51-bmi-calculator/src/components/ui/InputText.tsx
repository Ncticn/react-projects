"use client";

// React
import { ChangeEvent } from "react";

// Props
interface InputTextProps {
  id: string;
  name: string;
  label?: string;
  suffix: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function InputText({
  id,
  name,
  label,
  suffix,
  placeholder,
  value,
  onChange,
}: InputTextProps) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <label htmlFor={id} className="text-preset-7 text-grey-500 font-normal">
        {label}
      </label>
      <div className="border-grey-500 flex flex-row items-stretch justify-start gap-6 rounded-xl border-2 px-6 py-4 hover:border-blue-500">
        <input
          type="text"
          name={name}
          id={id}
          className="text-preset-4 placeholder:text-grey-500 h-full w-full text-blue-900 outline-0"
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />

        <span className="text-preset-4 text-blue-500">{suffix}</span>
      </div>
    </div>
  );
}
