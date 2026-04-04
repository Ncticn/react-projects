"use client";

import styles from "@/components/Tag/tag.module.css";

function Tag({ text }: { text: string }) {
  return (
    <div className={styles.tag}>
      <span className={styles.tag_text}>{text}</span>
    </div>
  );
}

export default Tag;
