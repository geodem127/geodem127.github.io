import React, { createContext, useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
import LoadingPage from "../common/loadingPage";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
// import LoadingPage from "../common/loadingPage";

const USER_DATA = {
  about: {},
  experiences: {},
  projects: {},
};

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loadComplete, isLoadComplete] = useState(false);

  //   const { isLoading, data } = useFetch({
  //     url: "https://www.googleapis.com/drive/v3/files/19GRbMBzGDqVU2lzl8s6DzV22DzMRBD5Q?alt=media&key=AIzaSyAKQgG-c7abzKfWvPB5A9_bbrfMW5abgtg",
  //   });

  const { loading, error, value } = useAsyncFetch({
    // url: "https://www.googleapis.com/drive/v3/files/19GRbMBzGDqVU2lzl8s6DzV22DzMRBD5Q?alt=media&key=AIzaSyAKQgG-c7abzKfWvPB5A9_bbrfMW5abgtg&clientId=412597297824-0a28ur5vqtoq1dnmfn6neigik722vtk9.apps.googleusercontent.com",
    url: "./portfolioData.json",
    options: {
      headers: { "sec-fetch-mode": "no-cors" },
    },
  });

  //https://drive.google.com/file/d/19GRbMBzGDqVU2lzl8s6DzV22DzMRBD5Q/view?usp=sharing

  //   useEffect(() => {
  //     if (!!loading) return;
  //     console.log("useFetch: ", { loading, data });
  //     isLoadComplete(!isLoading);
  //     setUserData(data);
  //   }, [loading, data]);

  if (!!loading) return <LoadingPage />;

  if (!!error && !loading) return "ERROR";

  return (
    <UserContext.Provider
      value={{ ...value, userData: value, isLoading: !!loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext };
export default UserContextProvider;
