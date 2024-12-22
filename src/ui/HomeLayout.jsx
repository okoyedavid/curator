import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../modules/HomeLayout.module.css";

function HomeLayout() {
  return (
    <div className={styles}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
