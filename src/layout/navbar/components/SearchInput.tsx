import apiConstants from "services/apiUrlsAndData";
import useRequestRepoSearchAPI from "services/useRequestRepoSearchAPI";
import { SpinnerCircularFixed } from "spinners-react";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const { data, isLoading, error, handleRepoSearchRequest } =
    useRequestRepoSearchAPI();

  console.log({ data, isLoading, error });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3) {
      handleRepoSearchRequest(
        `${apiConstants.apiURLs.repoSearchURL}${event.target.value}`
      );
    }
  };

  return (
    <div className={styles["search-box"]}>
      <SearchIcon className={styles["search-icon"]} />
      <input
        type="text"
        id="search"
        placeholder="Search for repo or user"
        onChange={handleChange}
      />
      <SpinnerCircularFixed
        size="20"
        color="#fff"
        secondaryColor="rgba(0,0,0,0.11)"
        thickness={150}
        enabled={isLoading}
      />
    </div>
  );
};

export default SearchInput;
