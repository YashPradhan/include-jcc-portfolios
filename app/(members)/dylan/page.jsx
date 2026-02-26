import styles from "./page.module.scss";

export default function DylanPage() {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>Dylan Hoang</h1>
      <p className={styles.description}>I'm a 3rd Year CS + Cog Sci student at UC Davis! Nice to meet you!</p>


      <div className={styles.generic}>
        <h1>My Projects</h1>
        <div className={styles.collection}>
          <div className={styles.descriptor}>
              <h2>L-Store</h2>
              <p>Led a team of 5 to design and implement a lineage-based columnar database engine supporting inserts, updates, versioned reads, and efficient analytical queries using tail pages and indirection.
              Built page management, indexing, buffer pool, and disk persistence layers in Python; optimized point queries and aggregations with O(1) lookups and minimized write amplification.
              </p>
          </div>
          <div className={styles.descriptor}>
              <h2>This Portfolio!</h2>
              <p> I was invited to join include early Winter Quarter 2026, now I'm creating this portfolio!</p>
          </div>
          <div className={styles.descriptor}>
              <h2>Chewing Classifier</h2>
              <p>Computer Vision software in collaboration with CS Masters students that masks and analyzes chewing video footage of neuroscience test participants with OpenCV, Python, Numpy in order to determine percentage of chewing runtime in parallel multithreaded processing
              </p>
          </div>
        </div>
      </div>
      <div className={styles.generic}>
        <h1>My Hobbies</h1>
        <div className={styles.collection}>
          <div className={styles.descriptor}>
            <h2>Computers!</h2>
            <ul>
              <li>Ryzen 7600X</li>
              <li>RX 6700 XT</li>
            </ul>
          </div>
          <div className={styles.descriptor}>
            <h2>Motorcycles!</h2>
            <ul>
              <li>2014 Honda CTX700N</li>
              <li>1974 Honda CB125S</li>
            </ul>
          </div>
          <div className={styles.descriptor}>
            <h2>Moto Camping!</h2>
            <ul>
              <li>Yellowstone</li>
              <li>Yosemite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
}

