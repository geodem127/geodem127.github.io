import React, { createContext } from "react";

import LoadingPage from "../common/loadingPage";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
import { useTheme } from "@mui/material";
import HeroPage from "../pages/hero";

const USER_DATA = {
  about: {},
  experiences: {},
  projects: {},
};

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const theme = useTheme();

  const appConfig = {
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    googleApiUrl: import.meta.env.VITE_REACT_APP_GOOGLE_API_URL,
    googleApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    githubVideosPath: import.meta.env.VITE_REACT_APP_GITHUB_VIDEOS_PATH,
    githubMediaPath: import.meta.env.VITE_REACT_APP_GITHUB_MEDIA_PATH,
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
        {/* <LoadingPage
          color={theme?.palette?.primary.main}
          size="md"
       
        /> */}
        <HeroPage />
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
