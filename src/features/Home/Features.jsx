import styles from "../../modules/HomePage.module.css";
import { HiOutlineWallet } from "react-icons/hi2";
import { FaKey } from "react-icons/fa";

function Features() {
  return (
    <main className={styles.featureMain}>
      <div className={styles.features}>
        <h1 className={styles.glossyText}>
          A place to save and sell your valuable artworks{" "}
        </h1>
        <ul className={styles.uses}>
          <li className={styles.usesList}>
            <h2 className={styles.featureText}>
              Encrypted Security {""} <FaKey />
            </h2>
            <p>
              We have a well-encrypted and safe security system for the users.
              We have a well-encrypted and safe security system for the users.
            </p>
          </li>
          <div className={styles.line}></div>
          <li className={styles.usesList}>
            <h2 className={styles.featureText}>
              Easy & Fast Transaction <HiOutlineWallet />
            </h2>{" "}
            <p>
              We have a flow of purchase transactions that are easy and also
              fast process.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Features;
