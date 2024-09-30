import React, { createContext } from "react";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
import config from "../config.jsx";

const USER_DATA = {
  about: {},
  experiences: {},
  projects: {},
};

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const { loading, error, value } = useAsyncFetch({
    url: `${config.API_ENDPOINT}/portfolioData.json`,
    // url: config.APP_DATA_PATH,
    options: {
      headers: { "sec-fetch-mode": "no-cors" },
    },
  });

  // console.log("UserContextProvider:", { value });
  // if (!!loading)
  //   return (
  //     <div style={{ width: "100vw", height: "100vh" }}>
  //       {/* <LoadingPage color={theme?.palette?.primary.main} size="md" /> */}
  //       <GdPreloader />
  //     </div>
  //   );

  // if (!!error && !loading) return "ERROR";

  return (
    <UserContext.Provider
      value={{
        ...value,
        userData: value,
        isLoading: !!loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext };
export default UserContextProvider;
