import styles from "./page.module.scss";

export default function TonyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tony's Portfolio</h1>
        <p className={styles.description}>things are hidden in plain sight...</p>
      </div>
      <div className={styles.gridContainer}>
        <div className={`${styles.box} ${styles.intro}`}>
          <p className={styles.boxInfo}>UC Davis</p>
          <p className={styles.boxInfo}>B.A. Design</p>
        </div>
        <div className={`${styles.box} ${styles.interests}`}>
          <p className={styles.boxInfo}>Interests:</p>
          <p className={styles.boxInfo}>concept art, photography, game development</p>
        </div>
        <div className={`${styles.box} ${styles.joke}`}>
          <p className={styles.boxInfo}>"Always remember that you are unique. Just like everyone else."</p>
        </div>
        <div className={`${styles.box} ${styles.work}`}>
          <p className={styles.boxInfo}>
            <a className={styles.link} href="https://github.com/tjlin653">github.com/tjlin653</a>
          </p>
        </div>
        <div className={`${styles.box} ${styles.deathToDragons}`}>
          <p className={styles.boxInfo}><em>Death to Dragons</em></p>
          <p className={styles.boxInfo}>(turn-based card game)</p>
        </div>
        <div className={`${styles.box} ${styles.websiteControls}`}>
          <p className={styles.boxInfo}><em>Website Master Controls</em></p>
          <p className={styles.boxInfo}>(accessibility-focused chrome extension)</p>
        </div>
      </div>
    </div>
  );
}