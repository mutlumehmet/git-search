import { NavBar, SideBar, RightPane } from ".";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.main}>
      <div className={styles["nav-row"]}>
        <NavBar />
      </div>
      <div className={styles["main-row"]}>
        <SideBar />
        <RightPane />
      </div>
    </div>
  );
};

export default Layout;
