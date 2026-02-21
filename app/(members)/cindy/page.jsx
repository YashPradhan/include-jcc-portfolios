import styles from "./page.module.scss";

export default function CindyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.main_row}>
        {/* left panel */}
        <div className={styles.left_column}>
          <img
            src="/aboutMe_image.JPEG"
            alt="Cindy's Profile Picture"
            className={styles.profile_image}
          />
          <h1 className={styles.title}>Cindy's Portfolio</h1>
          <p className={styles.description}>
            Welcome to my page! Here's a little about me below 𐔌՞ ܸ.ˬ.ܸ՞𐦯
          </p>
          <div className={styles.eeh_purple}>
            <p className={styles.description}>
            eeehhh.... purpl
            </p>

            <img src="/eeh_purpl.jpg" 
                 alt="eeh purple" 
                className={styles.eeh_image}/>
          </div>


          <div className={styles.fact_card}>
            <h2 className={styles.section_title}>Quick Facts</h2>
            <ul className={styles.list}>
              <li><strong>Major:</strong> Computer Science</li>
              <li><strong>Year:</strong> 3rd Year</li>
              <li><strong>University:</strong> UC Davis</li>
              <li>
                <strong>Projects:</strong>
                <ul className={styles.sub_list}>
                  <li>Food App</li>
                  <li>Stitch.it Website</li>
                  <li>JCC Website</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* right panel */}
        <div className={styles.right_column}>
          <div className={styles.card}>
            <h2 className={styles.section_title}>Interests & Hobbies</h2>

            {/* icon_grid spelling */}
            <div className={styles.icon_grid}>
              <div className={styles.icon_item}><span>🎾</span><p>Tennis</p></div>
              <div className={styles.icon_item}><span>🏸</span><p>Badminton</p></div>
              <div className={styles.icon_item}><span>🎮</span><p>Gaming</p></div>
              <div className={styles.icon_item}><span>🪡</span><p>Sewing</p></div>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.section_title}>A Little More About Me</h2>
            <p className={styles.paragraph}>
              Hi! I'm Cindy, I am a computer science major and a psychology minor! I am a quick learner and passionate about the things I learn to do.
              I like to think I am a pretty creative person, I grew up wanted to be an artist and many of my hobbies include drawing, sewing, crocheting,
              embroidery, etc. (The biggest project i've done so far is make my prom dress from scratch and I hope to start making clothing again soon!)

            </p>
            <p className={styles.paragraph}>
              I am also pretty active, I like to play sports like tennis and badminton, and enjoy going out and go hiking or to the beach. I haven't traveled 
              far thoughout my life so I'd love to try new places! (even in my own hometown &lt;/3) 
            </p>
            <p className={styles.paragraph}>
              While the outside is great, I also am actively exercising my brain 😼. I like playing both video games and board games. Istanbul is currently my favorite
              board game, I play with my family at home!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}