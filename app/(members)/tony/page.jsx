import styles from "./page.module.scss";

export default function TonyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tony's Portfolio</h1>
      <p className={styles.description}>something is hidden in plain sight...</p>
    </div>
  );
}