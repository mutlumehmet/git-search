import React from "react";
import styles from "./SearchInput.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div className={styles["search-box"]}>
      {/* <div className={styles["search-icon"]}> */}
      <SearchIcon className={styles["search-icon"]} />
      {/* </div> */}
      <input
        className={styles["search-input"]}
        type="text"
        id="search"
        placeholder="Search for repo or user"
      ></input>
    </div>
  );
};

export default SearchInput;
