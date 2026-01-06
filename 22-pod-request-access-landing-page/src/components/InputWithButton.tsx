import { useState } from "react";
import ButtonBase from "./ButtonBase";
import MessageError from "./MessageError";
import InputEmail from "./InputEmail";

function InputWithButton() {
  const [isValid, setIsValid] = useState<boolean>();
  const [errMessage, setErrMessage] = useState<string>();

  function handleInputChange(isValid: boolean, errMessage: string) {
    console.log(isValid, errMessage);
    setIsValid(isValid);
    setErrMessage(errMessage);
  }

  return (
    <div className="input-email-content">
      <div className="relative not-md:space-y-2 w-full md:w-md">
        <InputEmail
          inputId="input-email"
          inputName="input-mail"
          placeholder="Email address"
          onValidityChange={handleInputChange}
        />
        <ButtonBase
          type="submit"
          className="not-md:w-full md:absolute not-md:inset-x-0 md:right-1 md:top-1 md:bottom-1"
        >
          Request Access
        </ButtonBase>
      </div>
      <MessageError
        message={errMessage}
        className={!isValid ? "opacity-100" : "opacity-0"}
      />
    </div>
  );
}
export default InputWithButton;
