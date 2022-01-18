import styles from "./NavBar.module.css";
import { ReactComponent as DigieggsLogoSVG } from "./../../assets/digieggs_logo.svg";
import SearchInput from "./components/SearchInput";
import NavBookmarks from "./components/NavBookmarks";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <DigieggsLogoSVG width={138} height={20} />
      <SearchInput />
      <NavBookmarks />
    </div>
  );
};
export default NavBar;
