"use client";

// React
import { useState } from "react";

// Component Style
import styles from "@/components/ui/InputEmail/inputemail.module.css";
import ValidationEmail from "@/utils/ValidationEmail";

interface InputEmailProps {
  inputId: string;
  inputName: string;
  placeholder?: string;
  onChange?: (valid: boolean) => void;
}

function InputEmail({
  inputId,
  inputName,
  placeholder = "Email address",
  onChange,
}: InputEmailProps) {
  const [email, setEmail] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  function handleChange(value: string) {
    const result = ValidationEmail(value);
    const isValid = result.isValid;

    setErr(!isValid);
    setMessage(result.error);
    setEmail(value);

    onChange?.(isValid);
  }

  return (
    <div className={`${styles.formInputItem}`}>
      <input
        type="email"
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        className={`${styles.inputEmail} text-preset-6 ${err ? "outline-2 outline-red-400" : ""}`}
        value={email}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span
        className={`${styles.inputEmailError} text-preset-7 ${err ? "opacity-100" : "opacity-0"}`}
      >
        {message}
      </span>
    </div>
  );
}

export default InputEmail;
