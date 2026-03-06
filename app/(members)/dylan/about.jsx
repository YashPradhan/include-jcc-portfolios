import styles from "./page.module.scss";
import Image from "next/image";

export default function About() {

    return (
        <div className={styles.aboutContainer}>
            <Image src="/burrito.jpg" width={300} height={300} alt="Burrito" className= {styles.aboutImage}/>
            <div className={styles.aboutText}>
                <h1>Dylan Hoang</h1>
                <p className={styles.aboutDescription}>Working on this as part of my portfolio!</p>
            </div>
        </div>
    )
}