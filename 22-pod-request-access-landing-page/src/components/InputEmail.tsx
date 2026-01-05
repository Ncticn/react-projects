import { useState } from "react";
import UtilsValidationEmail from "../utils/UtilsValidationEmail";

interface InputEmailProps {
  inputName: string;
  inputId: string;
  placeholder?: string;
  onValidityChange: (isValid: boolean, message: string) => void;
}

function InputEmail({
  inputId,
  inputName,
  placeholder = "Email address",
  onValidityChange,
}: InputEmailProps) {
  const [isError, setIsError] = useState<boolean>();

  function inputEmailValidation(inputValue: string) {
    const result = UtilsValidationEmail(inputValue);
    setIsError(!result.isValid);
    onValidityChange?.(result.isValid, result.error);
  }

  return (
    <input
      type="email"
      name={inputName}
      id={inputId}
      placeholder={placeholder}
      className={`${
        isError ? "outline-2 outline-red-base" : "outline-0"
      } px-8 py-3 bg-blue-900 text-white placeholder:text-white/50 text-preset-3 rounded-full w-full`}
      onChange={(e) => inputEmailValidation(e.target.value)}
    />
  );
}

export default InputEmail;
