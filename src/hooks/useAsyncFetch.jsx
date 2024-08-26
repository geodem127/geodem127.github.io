import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export const useAsyncFetch = ({ url, options = {} }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const fetchData = async () => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);

    try {
      const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });

      const resJson = await res?.json();

      setTimeout(() => {
        setValue(resJson);
        if (!res?.ok) return setError(true);
        setError(false);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setValue(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, value };
};
