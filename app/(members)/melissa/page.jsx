import styles from "./page.module.scss";

export default function MelissaPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Melissa's Portfolio</h1>
<p className={styles.description}>Electrical Engineering Student</p>
<p className={styles.description}>University of California, Davis</p>

<section>
  <h2 className={styles.sectionHeader}>About Me</h2>
  <p className={styles.bodyText}>Hello, I am an Electrical Engineering student.</p>
</section>

<section>
  <h2 className={styles.sectionHeader}>Projects</h2>

  <div className={styles.ProjectList}>
    <div className={styles.ProjectCard}>
      <h3 className={styles.cardTitle}>Traffic Light Controller</h3>
      <p className={styles.bodyText}>
        Built a traffic light system using button interruptions, timing logic, and LED state control in C.
      </p>
    </div>

    <div className={styles.ProjectCard}>
      <h3 className={styles.cardTitle}>Earthquake Risk ML Model</h3>
      <p className={styles.bodyText}>
        Developed a machine learning pipeline to predict earthquake magnitude categories using python.
      </p>
    </div>
  </div>
</section>

<section>
  <h2 className={styles.sectionHeader}>Hobbies & Interests</h2>

  <p className={styles.bodyText}>
    Outside of engineering, I enjoy crocheting, hanging out with friends and late night adventures with my roomate.
  </p>

  <p className={styles.bodyText}>
    I’m especially interested in embedded systems, hands-on hardware projects,
    and building things that blend logic with creativity. I love coding, seeing my work have.a physical outcome is so exciting to see, even. if debugging takes hours.
  </p>
</section>

<section>
  <h2 className={styles.sectionHeader}>Fun Fact</h2>

  <p className={styles.bodyText}>
    I honestly don't know what to put here. I had a 90k minutes listening time for Spotify last year.
  </p>
</section>

<section>
  <h2 className={styles.sectionHeader}>Contact</h2>
  <p className={styles.bodyText}>Contact: mliperez@ucdavis.edu</p>
</section>
      </div>

  
  
  );

}
