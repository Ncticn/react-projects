import { useState } from "react";

import InputRequired from "./InputRequired";

import UtilValidationText from "../utils/UtilValidationText";

interface InputTextarea {
  inputID: string;
  inputName: string;
  inputRequired?: boolean;
  inputPlaceholder?: string;
  labelContent: string;
}

export default function InputTextarea(props: InputTextarea) {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  function handleOnBlur(value: string) {
    const result = UtilValidationText(value);
    const isValid = result.isValid;

    setError(!isValid);
    setMessage(result.error);
  }

  return (
    <div className="form-input-item w-full">
      <div className="flex flex-col items-stretch gap-2">
        <label htmlFor={props.inputID} className="text-body-sm text-grey-900">
          {props.labelContent} {props.inputRequired && <InputRequired />}
        </label>
        <textarea
          name={props.inputName}
          rows={3}
          id={props.inputID}
          placeholder={props.inputPlaceholder}
          required={props?.inputRequired}
          className={`text-body-md text-grey-900 rounded-lg border bg-white px-6 py-3 outline-0 transition-all delay-75 ease-linear ${error ? "border-red-400 hover:border-red-400 focus:border-red-400 active:border-red-400" : "border-grey-500 hover:border-green-600 focus:border-green-600 active:border-green-600"}`}
          onBlur={(e) => handleOnBlur(e.target.value)}
        ></textarea>
        {error && <span className="text-body-sm text-red-400">{message}</span>}
      </div>
    </div>
  );
}
