import styles from "./page.module.scss";

export default function AryanPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Aryan's Portfolio</h1>
      <p className={styles.description}>
      <strong>About me</strong>
      <br></br>
      <br></br>
      Hi, I’m Aryan Kapoor, a Computer Science undergraduate at UC Davis with a strong interest in artificial intelligence, data science, 
        and Software engineering. I enjoy building systems from the ground up, whether that’s implementing data structures in C++,
        developing machine learning models, or designing clean, user-focused applications. Through coursework and projects, I’ve worked with algorithms,
         applied AI, and always focusing on writing efficient code. Beyond technical skills, I’m passionate about using 
         technology as a tool for research, problem-solving, and social good. I’m currently seeking opportunities in research and collaborative 
         projects where I can deepen my understanding and create meaningful impact.</p>
    <div className={styles.skills}>
    <h1 className={styles.skills_header}>Skills</h1>
    <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C/C++</li>
        <li>Machine learning</li>
        <li>SQL</li>
        <li>React</li>
        <li>HTML/CSS</li>
    </ul>
    </div>
    </div>
  );
}
