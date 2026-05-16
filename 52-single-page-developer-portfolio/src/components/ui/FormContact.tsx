"use client";

// React
import { SubmitEvent, useState } from "react";

// Components
import ButtonSubmit from "./ButtonSubmit";
import InputEmail from "./InputEmail";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";

// Types
type inputTypes = {
  value: string;
  error: boolean;
  success: boolean;
};

export default function FormContact() {
  const [inputName, setInputName] = useState<inputTypes>({
    error: false,
    success: false,
    value: "",
  });
  const [inputEmail, setInputEmail] = useState<inputTypes>({
    error: false,
    success: false,
    value: "",
  });
  const [inputMessage, setInputMessage] = useState<inputTypes>({
    error: false,
    success: false,
    value: "",
  });

  const handleInputName = (v: string) => {
    const userValue = v;

    if (userValue.length === 0)
      return setInputName({ value: userValue, error: false, success: false });
    if (userValue.length < 3)
      return setInputName({ value: userValue, error: true, success: false });

    if (/[0-9]/g.test(userValue))
      return setInputName({ value: userValue, error: true, success: false });

    setInputName({
      value: userValue,
      error: false,
      success: true,
    });
  };

  const handleInputEmail = (v: string) => {
    const userValue = v;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (userValue.length === 0)
      return setInputEmail({ value: userValue, error: false, success: false });
    if (!emailRegex.test(userValue.trim()))
      return setInputEmail({ value: userValue, error: true, success: false });

    setInputEmail({
      value: userValue,
      error: false,
      success: true,
    });
  };

  const handleInputMessage = (v: string) => {
    const userValue = v;
    if (userValue.length === 0)
      return setInputMessage({
        value: userValue,
        error: false,
        success: false,
      });
    if (userValue.length < 50)
      return setInputMessage({ value: userValue, error: true, success: false });

    setInputMessage({
      value: userValue,
      error: false,
      success: true,
    });
  };

  const formSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName.value.length === 0)
      return setInputName({
        value: "",
        error: true,
        success: false,
      });
    if (inputEmail.value.length === 0)
      return setInputEmail({
        value: "",
        error: true,
        success: false,
      });
    if (inputMessage.value.length === 0)
      return setInputMessage({
        value: "",
        error: true,
        success: false,
      });

    if (inputName.success && inputEmail.success && inputMessage.success) {
      setInputName({
        value: "",
        error: false,
        success: false,
      });
      setInputEmail({
        value: "",
        error: false,
        success: false,
      });
      setInputMessage({
        value: "",
        error: false,
        success: false,
      });
    }
  };

  return (
    <form
      onSubmit={(e) => formSubmit(e)}
      className="flex flex-col items-stretch justify-center gap-8"
      id="formcontact"
    >
      <InputText
        id="input-user-name"
        name="input-name"
        placeholder="Name"
        error={inputName.error}
        success={inputName.success}
        value={inputName.value}
        onChange={handleInputName}
      />
      <InputEmail
        id="input-user-email"
        name="input-email"
        placeholder="Email"
        error={inputEmail.error}
        success={inputEmail.success}
        value={inputEmail.value}
        onChange={handleInputEmail}
      />

      <InputTextarea
        id="input-user-message"
        name="input-message"
        placeholder="Message"
        error={inputMessage.error}
        success={inputMessage.success}
        value={inputMessage.value}
        onChange={handleInputMessage}
      />

      <div className="text-end">
        <ButtonSubmit text="Send Message" />
      </div>
    </form>
  );
}
