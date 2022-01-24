import { NavBar, RightPane, SideBar } from "./";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
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

export default MainLayout;
