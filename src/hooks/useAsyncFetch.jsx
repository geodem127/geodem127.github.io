import { useEffect, useState } from "react";

// export default function useAsync(callback, dependencies = []) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();
//   const [value, setValue] = useState();

//   const callbackMemoized = useCallback(() => {
//     setLoading(true);
//     setError(undefined);
//     setValue(undefined);
//     callback()
//       .then(setValue)
//       .catch(setError)
//       .finally(() => setLoading(false));
//   }, dependencies);

//   useEffect(() => {
//     callbackMemoized();
//   }, [callbackMemoized]);

//   return { loading, error, value };
// }

// const DEFAULT_OPTIONS = {
//   headers: { "Content-Type": "application/json" },
// }

// export default function useFetch(url, options = {}, dependencies = []) {
//   return useAsync(() => {
//     return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
//       if (res.ok) return res.json()
//       return res.json().then(json => Promise.reject(json))
//     })
//   }, dependencies)
// }

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
      setValue(resJson);
      if (!res?.ok) return setError(true);
      setError(false);
      setLoading(false);
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
