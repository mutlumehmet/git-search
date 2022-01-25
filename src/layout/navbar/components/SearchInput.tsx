import {
  apiConstants,
  useRequestRepoSearchAPI,
  useRequestUserSearchAPI,
} from "services";
import { SpinnerCircularFixed } from "spinners-react";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const {
    data: repoData,
    isLoading: repoIsLoading,
    error: repoError,
    handleRepoSearchRequest,
  } = useRequestRepoSearchAPI();
  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
    handleUserSearchRequest,
  } = useRequestUserSearchAPI();

  console.log(
    { repoData, repoIsLoading, repoError },
    { userData, userIsLoading, userError }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3) {
      handleRepoSearchRequest(
        `${apiConstants.apiURLs.repoSearchURL}${event.target.value}`
      );
      handleUserSearchRequest(
        `${apiConstants.apiURLs.userSearchURL}${event.target.value}`
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
        enabled={repoIsLoading || userIsLoading}
      />
    </div>
  );
};

export default SearchInput;
