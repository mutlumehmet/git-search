import styles from "./NavBookmarks.module.css";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const NavBookmarks = () => {
  return (
    <div className={styles["navbookmarks-box"]}>
      <BookmarkBorderIcon style={{ color: "fff" }} />
      <p>Bookmarks</p>{" "}
    </div>
  );
};

export default NavBookmarks;
