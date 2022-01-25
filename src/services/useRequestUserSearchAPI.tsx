import { useState } from "react";
import axios from "axios";

import { apiConstants } from "./";

const useRequestUserSearchAPI = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | undefined | string>(null);

  const handleUserSearchRequest = async (URL: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(URL);
      const userdata = response.data.items;

      if (typeof userdata === undefined || null) {
        setError(apiConstants.responseMessage.unknown);
      } else if (userdata.length <= 0) {
        setError(apiConstants.responseMessage.empty);
      } else {
        const transUsers = userdata.map(
          (userData: { [key: string]: string }) => {
            return {
              userId: userData.id,
              userTitle: userData.login,
              userText: userData.html_url,
              userImgUrl: userData.avatar_url,
            };
          }
        );
        setData(transUsers);
      }
    } catch (err: any) {
      setError(err.message || apiConstants.responseMessage.unknown);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, handleUserSearchRequest };
};

export default useRequestUserSearchAPI;
