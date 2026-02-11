import styles from "./page.module.scss";

export default function TonyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tony's Portfolio</h1>
      <p className={styles.description}>Welcome to my page!</p>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>
      <footer>tjlin@ucdavis.edu</footer>
    </div>
  );
}
