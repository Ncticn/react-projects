import { useState } from "react";
import InputRequired from "./InputRequired";
import UtilValidationCheckbox from "../utils/UtilValidationCheckbox";

interface InputCheckbox {
  inputId: string;
  inputName: string;
  inputText: string;
  inputRequired: boolean;
  onValidityChange?: (isValid: boolean) => void;
}

export default function InputCheckbox(props: InputCheckbox) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function handleOnBlur(value: boolean) {
    const result = UtilValidationCheckbox(value);
    const isValid = result.isValid;

    setError(!isValid);
    setMessage(result.error);

    props.onValidityChange?.(isValid);
  }

  return (
    <div className="input-checkbox">
      <div className="space-y-2">
        <div className="flex items-center justify-start gap-4">
          <input
            type="checkbox"
            name={props.inputName}
            id={props.inputId}
            required={props.inputRequired}
            className="border-grey-500 size-4.5 appearance-none rounded-[1px] border bg-white text-green-600 transition delay-75 ease-linear checked:border-green-600 checked:bg-[url(src/assets/icons/icon-checkbox-check.svg)] checked:bg-auto checked:bg-center checked:bg-no-repeat"
            onBlur={(e) => handleOnBlur(e.target.checked)}
          />
          <label htmlFor={props.inputId} className="text-grey-900 text-body-sm">
            {props.inputText} {props?.inputRequired && <InputRequired />}
          </label>
        </div>
        {error && <span className="text-body-sm text-red-400">{message}</span>}
      </div>
    </div>
  );
}
