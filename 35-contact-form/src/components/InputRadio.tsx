import { useState } from "react";
import UtilValidationRadio from "../utils/UtilValidationRadio";

interface InputRadio {
  inputId: string;
  inputName: string;
  inputText: string;
  inputRequired: boolean;
  onValidityChange?: (isValid: boolean) => void;
}

export default function InputRadio(props: InputRadio) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function handleOnBlur(value: boolean) {
    const result = UtilValidationRadio(value);
    const isValid = result.isValid;

    setError(!isValid);
    setMessage(result.error);

    props.onValidityChange?.(isValid);
  }

  return (
    <div className="form-input-item w-full">
      <label
        className="border-grey-500 inline-block w-full rounded-lg border bg-white px-6 py-3 hover:border-green-600 active:bg-green-200 has-checked:border-green-600 has-checked:bg-green-200"
        htmlFor={props.inputId}
      >
        <div className="flex flex-row items-center justify-start gap-3">
          <input
            type="radio"
            name={props.inputName}
            id={props.inputId}
            className="border-grey-500 relative inline-flex size-5 appearance-none items-center justify-center overflow-hidden rounded-full border-2 opacity-50 transition delay-75 ease-linear checked:border-green-600 checked:opacity-100 checked:after:absolute checked:after:inset-x-1/5 checked:after:inset-y-1/5 checked:after:size-2.75 checked:after:rounded-full checked:after:bg-green-600"
            onBlur={(e) => handleOnBlur(e.target.checked)}
            value={props.inputText}
            required={props.inputRequired}
          />
          <span className="text-body-md text-grey-900 font-normal">
            {props.inputText}
          </span>
        </div>
      </label>
      {error && <span className="text-body-sm text-red-400">{message}</span>}
    </div>
  );
}
