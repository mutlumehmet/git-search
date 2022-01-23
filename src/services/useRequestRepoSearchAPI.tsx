import axios from "axios";
import { useState } from "react";
import { responseMessage } from "services/apiUrlsAndData";

const useRequestRepoSearchAPI = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | undefined | string>(null);

  const handleRepoSearchRequest = async (URL: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(URL);
      const repodata = response.data.items;

      if (typeof repodata === undefined || null) {
        setError(responseMessage.unknown);
      } else if (repodata.length <= 0) {
        setError(responseMessage.empty);
      } else {
        const transRepos = repodata.map((repoData: any) => {
          return {
            repoId: repoData.id,
            repoTitle: repoData.full_name,
            repoText: repoData.description,
          };
        });
        setData(transRepos);
      }
    } catch (err: any) {
      setError(err.message || responseMessage.unknown);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, handleRepoSearchRequest };
};

export default useRequestRepoSearchAPI;
