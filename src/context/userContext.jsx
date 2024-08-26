import React, { createContext } from "react";

import LoadingPage from "../common/loadingPage";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
import { useTheme } from "@mui/material";

const USER_DATA = {
  about: {},
  experiences: {},
  projects: {},
};

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const theme = useTheme();

  const appConfig = {
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  };

  const { loading, error, value } = useAsyncFetch({
    url: "./portfolioData.json",
    options: {
      headers: { "sec-fetch-mode": "no-cors" },
    },
  });

  if (!!loading)
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <LoadingPage
          color={theme?.palette?.primary.main}
          size="md"
          label="Loading..."
        />
      </div>
    );

  if (!!error && !loading) return "ERROR";

  return (
    <UserContext.Provider
      value={{
        ...value,
        userData: value,
        appConfig: appConfig,
        isLoading: !!loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext };
export default UserContextProvider;
