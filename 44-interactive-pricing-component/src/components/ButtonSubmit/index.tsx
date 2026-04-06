// Styles
import styles from "@/components/ButtonSubmit/buttonSubmit.module.css";

function ButtonSubmit({ text }: { text: string }) {
  return (
    <button type="button" className={styles.btn_submit}>
      {text}
    </button>
  );
}

export default ButtonSubmit;
