"use client";

import styles from "./page.module.scss";
import { useState } from "react";

export default function JordanPage() {
  const hobbies = [
    {
      title: "Crochet",
      description: "This is one of my favorite creations that I gifted to a friend! The character and outfit are crocheted, and I made her a felt crown!",
      image: "hobby1.png"
    },
    {
      title: "Crafting and Legos",
      description: "I love building those little book nooks during breaks. I have built around 7 of these already! Crafting and a good movie is my favorite!",
      image: "hobby2.png"
    },
    {
      title: "Concerts",
      description: "I have attended 14 concerts, and more upcoming this year! I am most excited for BTS and Bruno Mars coming up this year.",
      image: "hobby3.png"
    }
  ];

  const videoGames = [
    {
      title: "Breath of the Wild",
      image: "videogame1.png"
    },
    {
      title: "Nier Automata",
      image: "videogame2.png"
    },
    {
      title: "Resident Evil",
      image: "videogame3.png"
    }
  ];  

  const navBar = [
    { label: "Hobbies", key: "hobbies" },
    { label: "Video Games", key: "videoGames" }
  ];

  const [activeSection, setActiveSection] = useState("hobbies");

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
          <div className={styles.navBar}>
            {navBar.map((item) => (
              <button
                key={item.key}
                className={`${styles.navButton} ${activeSection === item.key ? styles.activeNavButton : ""}`}
                onClick={() => setActiveSection(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {activeSection === "hobbies" && (
            <>
              <h1>My Hobbies</h1>
              <div className={styles.hobbies}>
                {hobbies.map((hobby, index) => (
                  <div key={index} className={styles.hobby}>
                    <img src={hobby.image} alt={hobby.title} className={styles.hobbyPic} />
                    <h3>{hobby.title}</h3>
                    <p>{hobby.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "videoGames" && (
            <div className={styles.hobbiesSection}>
              <h1>Favorite Video Games!</h1>
              <div className={styles.hobbies}>
                {videoGames.map((game, index) => (
                  <div key={index} className={styles.hobby}>
                    <img src={game.image} alt={game.title} className={styles.hobbyPic} />
                    <h3>{game.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          )} 
        </div>
      </div>
    </div>
  );
}
