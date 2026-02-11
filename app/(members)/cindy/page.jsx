import styles from "./page.module.scss";

export default function CindyPage() {
  return (
    
    <div className={styles.container}>
      <img src="/aboutMe_image.JPEG" alt="Cindy's Profile Picture" className={styles.profileImage} />
      <h1 className={styles.title}>Cindy's Portfolio</h1>
      <p className={styles.description}>Welcome to my page! Here's a little about me below 𐔌՞ ܸ.ˬ.ܸ՞𐦯</p>

      <div className={styles.aboutMe_title}>
        <h2>About Me</h2>
        <p>I'm a passionate developer with a love for creating innovative solutions.</p>
      </div>
    </div>


  );
}
