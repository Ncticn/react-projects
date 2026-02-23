import { useState } from "react";

import InputRequired from "./InputRequired";
import UtilValidationText from "../utils/UtilValidationText";

interface InputText {
  inputID: string;
  inputName: string;
  inputRequired: boolean;
  inputPlaceholder?: string;
  labelContent?: string;
}

export default function InputText(props: InputText) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function handleOnBlur(value: string) {
    const result = UtilValidationText(value);
    const isValid = result.isValid;
    console.log(result);

    setError(!isValid);
    setMessage(result.error);
  }

  return (
    <>
      <div className="form-input-item w-full">
        <div className="flex flex-col items-stretch gap-2">
          <label htmlFor={props.inputID} className="text-body-sm text-grey-900">
            {props.labelContent} {props.inputRequired && <InputRequired />}
          </label>
          <input
            type="text"
            name={props.inputName}
            id={props.inputID}
            placeholder={props.inputPlaceholder}
            className={`border-grey-500 text-body-md text-grey-900 rounded-lg border bg-white px-6 py-3 outline-0 transition-all delay-75 ease-linear hover:border-green-600 focus:border-green-600 active:border-green-600 ${error ? "border-red-400 hover:border-red-400 focus:border-red-400 active:border-red-400" : ""}`}
            onBlur={(e) => handleOnBlur(e.target.value)}
          />
          {error && (
            <span className="text-body-sm text-red-400">{message}</span>
          )}
        </div>
      </div>
    </>
  );
}
