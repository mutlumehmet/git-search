import axios from "axios";
import { useState } from "react";

const useRequestRepoSearchAPI = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRepoSearchRequest = async (URL: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(URL);
      const repodata = await response.data;
      const transRepos = repodata.items.map((repoData: any) => {
        return {
          repoId: repoData.id,
          repoTitle: repoData.full_name,
          repoText: repoData.description,
        };
      });
      setData(transRepos);
    } catch (err: any) {
      setError(err.message || "Somethin went wrong!");
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, handleRepoSearchRequest };
};

export default useRequestRepoSearchAPI;
