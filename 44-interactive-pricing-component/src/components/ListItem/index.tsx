// Next.js
import Image from "next/image";

// Style Module
import styles from "@/components/ListItem/ListItem.module.css";

// Components
import IconCheck from "@/assets/icons/icon-check.svg";

function ListItem({ text }: { text: string }) {
  return (
    <li className={styles.listItem}>
      <Image src={IconCheck} alt="" />
      {text}
    </li>
  );
}

export default ListItem;
