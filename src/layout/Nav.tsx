import styles from "./Nav.module.css";
import NavBar from "../components/NavBar/NavBar";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavBar />
    </div>
  );
};

export default Nav;
