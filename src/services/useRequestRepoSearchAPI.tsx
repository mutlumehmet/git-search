import axios from "axios";
import { useState } from "react";
const useRequestRepoSearchAPI = () => {
  const [data, setData] = useState();

  const handleRepoSearchRequest = async (input: string) => {
    const URLPar = input;
    const RepoURL = `https://api.github.com/search/repositories?q=${URLPar}`;

    const response = await axios.get(RepoURL);
    const repodata = await response.data;

    const transRepos = repodata.items.map((repoData: any) => {
      return {
        repoId: repoData.id,
        repoTitle: repoData.full_name,
        repoText: repoData.description,
      };
    });
    setData(transRepos);
  };

  return [data, handleRepoSearchRequest];
};

export default useRequestRepoSearchAPI;
