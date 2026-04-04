// Styles
import styles from "@/components/InputRange/inputRange.module.css";

interface InputRange {
  inputID: string;
  inputName?: string;
  onChange?: (value: string) => void;
}

function InputRange({ inputID, inputName, onChange }: InputRange) {
  function handleChange(value: string) {
    onChange?.(value);
  }

  return (
    <div className="form-input-range">
      <input
        type="range"
        name={inputName}
        id={inputID}
        className={styles.input_range}
        min={1}
        max={5}
        defaultValue="3"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default InputRange;
