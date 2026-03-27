import { useState } from "react";

interface InputYearProps {
  inputID: string;
  inputName?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function InputYear({
  inputID,
  inputName = "user-input-year",
  onChange,
  placeholder = "YYYY",
}: InputYearProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  function handleOnChange(value: string) {
    let userValue = value.replace(/\D/g, "").slice(0, 4);

    if (!userValue) {
      onChange?.("");
      setInputValue("");
      setError(true);
      return;
    }

    if (Number(userValue) < 0) userValue = "1";
    if (Number(userValue) > 9999) userValue = "9999";

    setInputValue(userValue);
    setError(false);
    onChange?.(userValue);
  }

  return (
    <div className="form-input-item flex flex-col items-start justify-start gap-2 **:transition-all **:delay-75 **:ease-linear">
      <label
        htmlFor={inputID}
        className={`text-preset-5 tracking-5px font-bold uppercase ${error ? "text-red-400" : "text-grey-500"}`}
      >
        Year
      </label>
      <input
        type="text"
        name={inputName}
        id={inputID}
        placeholder={placeholder}
        className={`text-preset-3 w-full rounded-lg border px-4 py-1.75 text-black outline-0 md:px-6 ${error ? "border-red-400" : "border-grey-200"}`}
        value={inputValue}
        onChange={(e) => handleOnChange(e.target.value)}
      />

      <span
        className={`text-preset-5 tracking-0px text-red-400 italic ${error ? "opacity-100" : "opacity-0"}`}
      >
        This field is required
      </span>
    </div>
  );
}
