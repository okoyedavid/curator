import { NavLink } from "react-router-dom";
import styles from "../modules/Navbar.module.css";
import { HiOutlineUser } from "react-icons/hi";
import Logo from "./Logo";
import Button from "./Button";
import { FaCompass, FaWallet } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [shownav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav((nav) => !nav);
  }
  return (
    <header className={styles.header}>
      <Logo />

      <div
        className={`${styles.hamMenu} ${shownav && styles.active}`}
        onClick={handleClick}
      >
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </div>
      <nav className={`${styles.nav} ${shownav && styles.active}`}>
        <ul className={styles.navList}>
          <li className={styles.lightSwithc}>
            <DarkModeToggle />
          </li>
          <li>
            <NavLink className={styles.navLink} to="/gallery">
              <BsImages /> <span>Gallery</span>
            </NavLink>
          </li>

          <li>
            <NavLink className={styles.navLink} to="/wallet">
              <FaWallet /> <span>Wallet</span>
            </NavLink>
          </li>

          <li>
            <NavLink className={styles.navLink} to="/explore">
              <FaCompass /> <span>explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to="/login">
              <Button size={"medium"} variation={"primary"}>
                <HiOutlineUser /> Login
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
