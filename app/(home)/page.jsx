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
        <li>Action items:</li>
        <li>Navigate to <span>@/app/_components/navbar/Navbar.jsx</span></li>
        <li>Create your <span>Navbar</span> component and add a <span>dropdown</span> feature to it</li>
        <li>You are required to use <span>useState</span> and the <span>map()</span> method</li>
        <li>Don&apos;t worry too much about smooth animations. Just try get it working :-)</li>
      </ul>
    </div>
  );
}
