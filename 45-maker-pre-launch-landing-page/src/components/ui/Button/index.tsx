// Component Style
import styles from "@/components/ui/Button/button.module.css";

interface ButtonProps {
  text: string;
  type: "submit" | "button" | "reset";
}

function Button({ text, type }: ButtonProps) {
  return (
    <button type={type} className={`${styles.btn} text-preset-6`}>
      {text}
    </button>
  );
}

export default Button;
