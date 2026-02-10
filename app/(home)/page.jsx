import Image from "next/image";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image 
        src="/logo.png"
        width={80}
        height={80}
        alt="Include logo"
        className={styles.image}
      />
      <h1>Welcome to our Dev Space!</h1>
      <ul>
        <li>Take Home:</li>
        <li>Navigate to <span>@/app/(members)/your_name/</span></li>
        <li>Start working on your personal page!</li>
        <li>You are required to use <span>Flexbox</span> components.</li>
        <li>Don&apos;t worry too much about a beautiful page. Just try get it working :-)</li>
      </ul>
    </div>
  );
}
