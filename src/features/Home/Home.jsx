import styles from "../../modules/HomePage.module.css";
import Cta from "./Cta";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>The Curator</h1>
        <p>
          Where the brushstroke meets the blockchain, forging a new frontier of
          art and crypto.
        </p>

        <Cta />
      </div>
      <div className={styles.background}>
        <img src="/image2.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
