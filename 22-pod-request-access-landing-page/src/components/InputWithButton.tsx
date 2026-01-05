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
        <ButtonBase type="submit">Request Access</ButtonBase>
      </div>
      {!isValid && <MessageError message={errMessage} />}
    </div>
  );
}
export default InputWithButton;
