import styles from "./page.module.scss";

const projects = [
  {
    id: 1,
    title: "Pneumonia Predictor",
    category: "AI",
    tech: ["Pytorch", "Neural Networks","Streamlit"],
    link: "https://github.com/AryanKpr/pneumonia-predictor",
    description:"Deep learning model to detect pneumonia from chest X-ray images using PyTorch and Streamlit."
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    tech: ["React", "CSS"],
    link: "https://github.com/AryanKpr/portfolio",
   description:"Personal portfolio website created with React to demonstrate frontend development skills and share projects and experience with deployment on Vercel to showcase projects and skills"
  },
  {
    id: 3,
    title: "Weather Prediction Model",
    category: "AI",
    tech: ["Python","Scikit-learn","Streamlit"],
    link: "https://github.com/AryanKpr/Weather-Prediction-Model",
    description:"Developed a weather prediction model using Python in a Jupyter Notebook environment and uses streamlit to create a user-interactive frontend. The model analyzes historical weather data to forecast future conditions such as temperature/precipitation."
  }
]
export default function AryanPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <h1>Aryan's Portfolio</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#ai-projects">AI Projects</a></li>
            <li><a href="#web-projects">Web Projects</a></li>
          </ul>
        </nav>
      </header>
      <p id = "about" className={styles.description}>
      <strong>About me</strong>
      <br></br>
      <br></br>
      Hi, I’m Aryan Kapoor, a Computer Science undergraduate at UC Davis with a strong interest in artificial intelligence, data science, 
        and Software engineering. I enjoy building systems from the ground up, whether that’s implementing data structures in C++,
        developing machine learning models, or designing clean, user-focused applications. Through coursework and projects, I’ve worked with algorithms,
         applied AI, and always focusing on writing efficient code. Beyond technical skills, I’m passionate about using 
         technology as a tool for research, problem-solving, and social good. I’m currently seeking opportunities in research and collaborative 
         projects where I can deepen my understanding and create meaningful impact.</p>
    <p id = "hobbies" className={styles.hobbies}>
      <strong>Hobbies</strong>
      <br></br>
      <br></br>
      Outside tech and the classroom, I love playing tennis and soccer. I am also a big foodie, so if you know any good spots in davis then let me know I'll try for sure.

    </p>
    <div id = "skills" className={styles.skills}>
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
    <div id = "ai-projects" className={styles.projects}>
      <h1>AI Projects</h1>
      <div className={styles.projectGrid}>
      {projects.filter(project => project.category=="AI")
      .map((project => (
        <div key={project.id} className={styles.projectCards}> 
        <h3><strong>{project.title}</strong></h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <a href = {project.link} className={styles.projectLink}>View Project</a>
        </div>
      )))}
      </div>
    </div>
    <div id = "web-projects" className={styles.projects}>
      <h1>Web Projects</h1>
      <div className={styles.projectGrid}>
      {projects.filter(project => project.category=="Web")
      .map((project => (
        <div key={project.id} className={styles.projectCards}> 
        <h3><strong>{project.title}</strong></h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <a href = {project.link} className={styles.projectLink}>View Project</a>
        </div>
      )))}
      </div>
    </div>
    </div>
  );
}
