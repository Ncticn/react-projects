import styles from "@/components/ui/InputEmail/inputemail.module.css";

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
  return (
    <div className={`${styles.formInputItem}`}>
      <input
        type="email"
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        className={`${styles.inputEmail} text-preset-6`}
      />
      <span className={`${styles.inputEmailError} text-preset-7`}>
        Oops! That doesn’t look like an email address
      </span>
    </div>
  );
}

export default InputEmail;
