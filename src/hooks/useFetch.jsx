import { useEffect, useState } from "react";

const useFetch = ({ url, ...other }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(url, { ...other });
      const xData = await response.json();
      setUserData(xData);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!!isLoading) return;
    setData(userData);
    setIsLoading(false);
  }, [isLoading, userData]);

  return { isLoading, data };
};

export default useFetch;
