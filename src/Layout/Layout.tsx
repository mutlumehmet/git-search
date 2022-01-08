import NavBar from "./NavBar";
import RightPane from "./RightPane";
import SideBar from "./SideBar";
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
