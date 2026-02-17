import styles from "./page.module.scss";

export default function TonyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tony's Portfolio</h1>
        <p className={styles.description}>things are hidden in plain sight...</p>
      </div>
      <div className={`${styles.box} ${styles.intro}`}>
        <p className={styles.boxInfo}>University of California, Davis</p>
        <p className={styles.boxInfo}>B.A. Design</p>
      </div>
    </div>
  );
}