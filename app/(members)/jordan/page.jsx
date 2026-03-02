import styles from "./page.module.scss";

export default function JordanPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>About Me</header>

      <div className={styles.profileContainer}>
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <img src="profile1.png" alt="Profile Picture" className={styles.profilePic} />
          </div>
          <div className={styles.infoWrapper}>
            <div>
              <h1>Jordan</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nostrum enim dolores ea accusamus sunt nesciunt reiciendis, quibusdam, natus, harum fugit ad minus ut! Asperiores ea debitis doloremque molestiae.</p>
            </div>

            <div className={styles.contactWrapper}>
              <div className={styles.contactInfo}>
                <div>
                  <h4>University</h4>
                  <p>university here</p>
                </div>
                <div>
                  <h4>Major</h4>
                  <p>Computer Science</p>
                </div>
                <div>
                  <h4>Favorite Food</h4>
                  <p>Hot Pot</p>
                </div>
                <div>
                  <h4>Favorite Show</h4>
                  <p>Peanuts</p>
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.github}>
                  <p className={styles.githubLink}>Github</p>
                </div>
                <div className={styles.resume}>
                  <p className={styles.resumeLink}>Download my Resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.hobbiesSection}>
          <h1>My Hobbies</h1>
          <div className={styles.hobbies}>
            <div className={styles.hobby}>
              <img src="hobby1.png" alt="Hobby 1" className={styles.hobbyPic} />
              <h3>Crochet</h3>
              <p>This is one of my favorite creations that I gifted to a friend! The character and outfit are crocheted, and I made her a felt crown!</p>
            </div>

            <div className={styles.hobby}>
              <img src="hobby2.png" alt="Hobby 2" className={styles.hobbyPic} />
              <h3>Crafting and Legos</h3>
              <p>I love building those little book nooks during breaks. I have built around 7 of these already! Crafting and a good movie is my favorite!</p>
            </div>

            <div className={styles.hobby}>
              <img src="hobby3.png" alt="Hobby 3" className={styles.hobbyPic} />
              <h3>Concerts</h3>
              <p>I have attended 14 concerts, and more upcoming this year! I am most excited for BTS and Bruno Mars coming up this year. </p>
            </div>
          </div>

          <div className={styles.hobbiesSection}>
            <h1>Favorite Video Games!</h1>
            <div className={styles.hobbies}>
              <div className={styles.hobby}>
                <img src="videogame1.png" alt="Video Game 1" className={styles.hobbyPic} />
                <h3>Breath of the Wild</h3>
              </div>

              <div className={styles.hobby}>
                <img src="videogame2.png" alt="Video Game 2" className={styles.hobbyPic} />
                <h3>Nier Automata</h3>
              </div>

              <div className={styles.hobby}>
                <img src="videogame3.png" alt="Video Game 3" className={styles.hobbyPic} />
                <h3>Resident Evil</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
