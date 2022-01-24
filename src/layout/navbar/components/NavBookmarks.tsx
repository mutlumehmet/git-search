import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import styles from "./NavBookmarks.module.css";

const NavBookmarks = () => {
  return (
    <div className={styles["navbookmarks-box"]}>
      <BookmarkBorderIcon className={styles["navbookmarks-icon"]} />
      <p>Bookmarks</p>
    </div>
  );
};

export default NavBookmarks;
